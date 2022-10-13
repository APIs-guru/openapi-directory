package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTokenRequestBodyActionEnum string

const (
	CreateTokenRequestBodyActionEnumLicenseeLogin CreateTokenRequestBodyActionEnum = "licenseeLogin"
)

type CreateTokenRequestBodyAPIKeyRoleEnum string

const (
	CreateTokenRequestBodyAPIKeyRoleEnumRoleApikeyLicensee    CreateTokenRequestBodyAPIKeyRoleEnum = "ROLE_APIKEY_LICENSEE"
	CreateTokenRequestBodyAPIKeyRoleEnumRoleApikeyAnalytics   CreateTokenRequestBodyAPIKeyRoleEnum = "ROLE_APIKEY_ANALYTICS"
	CreateTokenRequestBodyAPIKeyRoleEnumRoleApikeyOperation   CreateTokenRequestBodyAPIKeyRoleEnum = "ROLE_APIKEY_OPERATION"
	CreateTokenRequestBodyAPIKeyRoleEnumRoleApikeyMaintenance CreateTokenRequestBodyAPIKeyRoleEnum = "ROLE_APIKEY_MAINTENANCE"
	CreateTokenRequestBodyAPIKeyRoleEnumRoleApikeyAdmin       CreateTokenRequestBodyAPIKeyRoleEnum = "ROLE_APIKEY_ADMIN"
)

type CreateTokenRequestBodyTokenTypeEnum string

const (
	CreateTokenRequestBodyTokenTypeEnumDefault CreateTokenRequestBodyTokenTypeEnum = "DEFAULT"
	CreateTokenRequestBodyTokenTypeEnumShop    CreateTokenRequestBodyTokenTypeEnum = "SHOP"
	CreateTokenRequestBodyTokenTypeEnumApikey  CreateTokenRequestBodyTokenTypeEnum = "APIKEY"
)

type CreateTokenRequestBodyTypeEnum string

const (
	CreateTokenRequestBodyTypeEnumAction CreateTokenRequestBodyTypeEnum = "ACTION"
)

type CreateTokenRequestBody struct {
	Action                 *CreateTokenRequestBodyActionEnum     `form:"name=action"`
	APIKeyRole             *CreateTokenRequestBodyAPIKeyRoleEnum `form:"name=apiKeyRole"`
	CancelURL              *string                               `form:"name=cancelURL"`
	CancelURLTitle         *string                               `form:"name=cancelURLTitle"`
	LicenseTemplateNumber  *string                               `form:"name=licenseTemplateNumber"`
	LicenseeNumber         *string                               `form:"name=licenseeNumber"`
	PredefinedShoppingItem *string                               `form:"name=predefinedShoppingItem"`
	PrivateKey             *string                               `form:"name=privateKey"`
	ProductNumber          *string                               `form:"name=productNumber"`
	SuccessURL             *string                               `form:"name=successURL"`
	SuccessURLTitle        *string                               `form:"name=successURLTitle"`
	TokenType              CreateTokenRequestBodyTokenTypeEnum   `form:"name=tokenType"`
	Type                   *CreateTokenRequestBodyTypeEnum       `form:"name=type"`
}

type CreateTokenSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateTokenRequest struct {
	Request  CreateTokenRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security CreateTokenSecurity
}

type CreateTokenResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
