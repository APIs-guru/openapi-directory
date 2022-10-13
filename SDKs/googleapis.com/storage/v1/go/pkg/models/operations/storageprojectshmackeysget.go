package operations

import (
	"openapi/pkg/models/shared"
)

type StorageProjectsHmacKeysGetPathParams struct {
	AccessID  string `pathParam:"style=simple,explode=false,name=accessId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type StorageProjectsHmacKeysGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType  *string         `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
	UserProject *string         `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageProjectsHmacKeysGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsHmacKeysGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsHmacKeysGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsHmacKeysGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsHmacKeysGetSecurity struct {
	Option1 *StorageProjectsHmacKeysGetSecurityOption1 `security:"option"`
	Option2 *StorageProjectsHmacKeysGetSecurityOption2 `security:"option"`
	Option3 *StorageProjectsHmacKeysGetSecurityOption3 `security:"option"`
	Option4 *StorageProjectsHmacKeysGetSecurityOption4 `security:"option"`
}

type StorageProjectsHmacKeysGetRequest struct {
	PathParams  StorageProjectsHmacKeysGetPathParams
	QueryParams StorageProjectsHmacKeysGetQueryParams
	Security    StorageProjectsHmacKeysGetSecurity
}

type StorageProjectsHmacKeysGetResponse struct {
	ContentType     string
	HmacKeyMetadata *shared.HmacKeyMetadata
	StatusCode      int64
}
