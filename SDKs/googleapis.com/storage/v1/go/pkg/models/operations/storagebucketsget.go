package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketsGetPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageBucketsGetProjectionEnum string

const (
	StorageBucketsGetProjectionEnumFull  StorageBucketsGetProjectionEnum = "full"
	StorageBucketsGetProjectionEnumNoACL StorageBucketsGetProjectionEnum = "noAcl"
)

type StorageBucketsGetQueryParams struct {
	Alt                      *shared.AltEnum                  `queryParam:"style=form,explode=true,name=alt"`
	Fields                   *string                          `queryParam:"style=form,explode=true,name=fields"`
	IfMetagenerationMatch    *string                          `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
	IfMetagenerationNotMatch *string                          `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
	Key                      *string                          `queryParam:"style=form,explode=true,name=key"`
	OauthToken               *string                          `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint              *bool                            `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection               *StorageBucketsGetProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser                *string                          `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType               *string                          `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP                   *string                          `queryParam:"style=form,explode=true,name=userIp"`
	UserProject              *string                          `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageBucketsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsGetSecurity struct {
	Option1 *StorageBucketsGetSecurityOption1 `security:"option"`
	Option2 *StorageBucketsGetSecurityOption2 `security:"option"`
	Option3 *StorageBucketsGetSecurityOption3 `security:"option"`
	Option4 *StorageBucketsGetSecurityOption4 `security:"option"`
	Option5 *StorageBucketsGetSecurityOption5 `security:"option"`
}

type StorageBucketsGetRequest struct {
	PathParams  StorageBucketsGetPathParams
	QueryParams StorageBucketsGetQueryParams
	Security    StorageBucketsGetSecurity
}

type StorageBucketsGetResponse struct {
	Bucket      *shared.Bucket
	ContentType string
	StatusCode  int64
}
