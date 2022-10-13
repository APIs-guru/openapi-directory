package operations

import (
	"openapi/pkg/models/shared"
)

type IamRolesGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type IamRolesGetPublicKeyTypeEnum string

const (
	IamRolesGetPublicKeyTypeEnumTypeNone         IamRolesGetPublicKeyTypeEnum = "TYPE_NONE"
	IamRolesGetPublicKeyTypeEnumTypeX509PemFile  IamRolesGetPublicKeyTypeEnum = "TYPE_X509_PEM_FILE"
	IamRolesGetPublicKeyTypeEnumTypeRawPublicKey IamRolesGetPublicKeyTypeEnum = "TYPE_RAW_PUBLIC_KEY"
)

type IamRolesGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                       `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum               `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                       `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                       `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                       `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                       `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	PublicKeyType  *IamRolesGetPublicKeyTypeEnum `queryParam:"style=form,explode=true,name=publicKeyType"`
	QuotaUser      *string                       `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                       `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type IamRolesGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IamRolesGetRequest struct {
	PathParams  IamRolesGetPathParams
	QueryParams IamRolesGetQueryParams
	Security    IamRolesGetSecurity
}

type IamRolesGetResponse struct {
	ContentType string
	Role        *shared.Role
	StatusCode  int64
}
