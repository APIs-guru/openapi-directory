package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketAccessControlsDeletePathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
	Entity string `pathParam:"style=simple,explode=false,name=entity"`
}

type StorageBucketAccessControlsDeleteQueryParams struct {
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

type StorageBucketAccessControlsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketAccessControlsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketAccessControlsDeleteSecurity struct {
	Option1 *StorageBucketAccessControlsDeleteSecurityOption1 `security:"option"`
	Option2 *StorageBucketAccessControlsDeleteSecurityOption2 `security:"option"`
}

type StorageBucketAccessControlsDeleteRequest struct {
	PathParams  StorageBucketAccessControlsDeletePathParams
	QueryParams StorageBucketAccessControlsDeleteQueryParams
	Security    StorageBucketAccessControlsDeleteSecurity
}

type StorageBucketAccessControlsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
