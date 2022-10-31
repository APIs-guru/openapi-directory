package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketsDeletePathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageBucketsDeleteQueryParams struct {
	Alt                      *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields                   *string         `queryParam:"style=form,explode=true,name=fields"`
	IfMetagenerationMatch    *string         `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
	IfMetagenerationNotMatch *string         `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
	Key                      *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken               *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint              *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType               *string         `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP                   *string         `queryParam:"style=form,explode=true,name=userIp"`
	UserProject              *string         `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageBucketsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsDeleteSecurity struct {
	Option1 *StorageBucketsDeleteSecurityOption1 `security:"option"`
	Option2 *StorageBucketsDeleteSecurityOption2 `security:"option"`
	Option3 *StorageBucketsDeleteSecurityOption3 `security:"option"`
}

type StorageBucketsDeleteRequest struct {
	PathParams  StorageBucketsDeletePathParams
	QueryParams StorageBucketsDeleteQueryParams
	Security    StorageBucketsDeleteSecurity
}

type StorageBucketsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
