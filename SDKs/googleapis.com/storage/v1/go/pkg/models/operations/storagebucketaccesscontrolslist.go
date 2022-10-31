package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketAccessControlsListPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageBucketAccessControlsListQueryParams struct {
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

type StorageBucketAccessControlsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketAccessControlsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketAccessControlsListSecurity struct {
	Option1 *StorageBucketAccessControlsListSecurityOption1 `security:"option"`
	Option2 *StorageBucketAccessControlsListSecurityOption2 `security:"option"`
}

type StorageBucketAccessControlsListRequest struct {
	PathParams  StorageBucketAccessControlsListPathParams
	QueryParams StorageBucketAccessControlsListQueryParams
	Security    StorageBucketAccessControlsListSecurity
}

type StorageBucketAccessControlsListResponse struct {
	BucketAccessControls *shared.BucketAccessControls
	ContentType          string
	StatusCode           int64
}
