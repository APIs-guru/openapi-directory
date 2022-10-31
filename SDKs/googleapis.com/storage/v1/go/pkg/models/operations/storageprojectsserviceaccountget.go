package operations

import (
	"openapi/pkg/models/shared"
)

type StorageProjectsServiceAccountGetPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type StorageProjectsServiceAccountGetQueryParams struct {
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

type StorageProjectsServiceAccountGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsServiceAccountGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsServiceAccountGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsServiceAccountGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsServiceAccountGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsServiceAccountGetSecurity struct {
	Option1 *StorageProjectsServiceAccountGetSecurityOption1 `security:"option"`
	Option2 *StorageProjectsServiceAccountGetSecurityOption2 `security:"option"`
	Option3 *StorageProjectsServiceAccountGetSecurityOption3 `security:"option"`
	Option4 *StorageProjectsServiceAccountGetSecurityOption4 `security:"option"`
	Option5 *StorageProjectsServiceAccountGetSecurityOption5 `security:"option"`
}

type StorageProjectsServiceAccountGetRequest struct {
	PathParams  StorageProjectsServiceAccountGetPathParams
	QueryParams StorageProjectsServiceAccountGetQueryParams
	Security    StorageProjectsServiceAccountGetSecurity
}

type StorageProjectsServiceAccountGetResponse struct {
	ContentType    string
	ServiceAccount *shared.ServiceAccount
	StatusCode     int64
}
