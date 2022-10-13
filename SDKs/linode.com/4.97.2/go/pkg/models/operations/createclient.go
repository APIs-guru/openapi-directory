package operations

import (
	"openapi/pkg/models/shared"
)

type CreateClientRequestBodyStatusEnum string

const (
	CreateClientRequestBodyStatusEnumActive    CreateClientRequestBodyStatusEnum = "active"
	CreateClientRequestBodyStatusEnumDisabled  CreateClientRequestBodyStatusEnum = "disabled"
	CreateClientRequestBodyStatusEnumSuspended CreateClientRequestBodyStatusEnum = "suspended"
)

type CreateClientRequestBody struct {
	ID           *string                            `json:"id"`
	Label        string                             `json:"label"`
	Public       *bool                              `json:"public"`
	RedirectURI  string                             `json:"redirect_uri"`
	Secret       *string                            `json:"secret"`
	Status       *CreateClientRequestBodyStatusEnum `json:"status"`
	ThumbnailURL *string                            `json:"thumbnail_url"`
}

type CreateClientSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateClientSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateClientSecurity struct {
	Option1 *CreateClientSecurityOption1 `security:"option"`
	Option2 *CreateClientSecurityOption2 `security:"option"`
}

type CreateClientRequest struct {
	Request  *CreateClientRequestBody `request:"mediaType=application/json"`
	Security CreateClientSecurity
}

type CreateClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CreateClientResponse struct {
	ContentType                              string
	OAuthClient                              *shared.OAuthClient
	StatusCode                               int64
	CreateClientDefaultApplicationJSONObject *CreateClientDefaultApplicationJSON
}
