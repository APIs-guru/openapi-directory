package operations

import (
	"openapi/pkg/models/shared"
)

type OsloginUsersSSHPublicKeysCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type OsloginUsersSSHPublicKeysCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type OsloginUsersSSHPublicKeysCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type OsloginUsersSSHPublicKeysCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type OsloginUsersSSHPublicKeysCreateSecurity struct {
	Option1 *OsloginUsersSSHPublicKeysCreateSecurityOption1 `security:"option"`
	Option2 *OsloginUsersSSHPublicKeysCreateSecurityOption2 `security:"option"`
}

type OsloginUsersSSHPublicKeysCreateRequest struct {
	PathParams  OsloginUsersSSHPublicKeysCreatePathParams
	QueryParams OsloginUsersSSHPublicKeysCreateQueryParams
	Request     *shared.SSHPublicKey `request:"mediaType=application/json"`
	Security    OsloginUsersSSHPublicKeysCreateSecurity
}

type OsloginUsersSSHPublicKeysCreateResponse struct {
	ContentType  string
	SSHPublicKey *shared.SSHPublicKey
	StatusCode   int64
}
