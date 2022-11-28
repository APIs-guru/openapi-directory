package operations

import (
	"openapi/pkg/models/shared"
)

type OsloginUsersImportSSHPublicKeyPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type OsloginUsersImportSSHPublicKeyQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	ProjectID      *string           `queryParam:"style=form,explode=true,name=projectId"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type OsloginUsersImportSSHPublicKeySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type OsloginUsersImportSSHPublicKeySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type OsloginUsersImportSSHPublicKeySecurity struct {
	Option1 *OsloginUsersImportSSHPublicKeySecurityOption1 `security:"option"`
	Option2 *OsloginUsersImportSSHPublicKeySecurityOption2 `security:"option"`
}

type OsloginUsersImportSSHPublicKeyRequest struct {
	PathParams  OsloginUsersImportSSHPublicKeyPathParams
	QueryParams OsloginUsersImportSSHPublicKeyQueryParams
	Request     *shared.SSHPublicKeyInput `request:"mediaType=application/json"`
	Security    OsloginUsersImportSSHPublicKeySecurity
}

type OsloginUsersImportSSHPublicKeyResponse struct {
	ContentType                string
	ImportSSHPublicKeyResponse *shared.ImportSSHPublicKeyResponse
	StatusCode                 int64
}
