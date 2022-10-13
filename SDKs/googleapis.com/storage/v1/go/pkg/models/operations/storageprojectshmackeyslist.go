package operations

import (
	"openapi/pkg/models/shared"
)

type StorageProjectsHmacKeysListPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type StorageProjectsHmacKeysListQueryParams struct {
	Alt                 *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields              *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults          *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken          *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken           *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint         *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	ServiceAccountEmail *string         `queryParam:"style=form,explode=true,name=serviceAccountEmail"`
	ShowDeletedKeys     *bool           `queryParam:"style=form,explode=true,name=showDeletedKeys"`
	UploadType          *string         `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP              *string         `queryParam:"style=form,explode=true,name=userIp"`
	UserProject         *string         `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageProjectsHmacKeysListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsHmacKeysListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsHmacKeysListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsHmacKeysListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageProjectsHmacKeysListSecurity struct {
	Option1 *StorageProjectsHmacKeysListSecurityOption1 `security:"option"`
	Option2 *StorageProjectsHmacKeysListSecurityOption2 `security:"option"`
	Option3 *StorageProjectsHmacKeysListSecurityOption3 `security:"option"`
	Option4 *StorageProjectsHmacKeysListSecurityOption4 `security:"option"`
}

type StorageProjectsHmacKeysListRequest struct {
	PathParams  StorageProjectsHmacKeysListPathParams
	QueryParams StorageProjectsHmacKeysListQueryParams
	Security    StorageProjectsHmacKeysListSecurity
}

type StorageProjectsHmacKeysListResponse struct {
	ContentType      string
	HmacKeysMetadata *shared.HmacKeysMetadata
	StatusCode       int64
}
