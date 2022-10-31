package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageBucketContentServers = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageBucketContentPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetObjectStorageBucketContentQueryParams struct {
	Delimiter *string `queryParam:"style=form,explode=true,name=delimiter"`
	Marker    *string `queryParam:"style=form,explode=true,name=marker"`
	PageSize  *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Prefix    *string `queryParam:"style=form,explode=true,name=prefix"`
}

type GetObjectStorageBucketContentSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetObjectStorageBucketContentSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetObjectStorageBucketContentSecurity struct {
	Option1 *GetObjectStorageBucketContentSecurityOption1 `security:"option"`
	Option2 *GetObjectStorageBucketContentSecurityOption2 `security:"option"`
}

type GetObjectStorageBucketContentRequest struct {
	ServerURL   *string
	PathParams  GetObjectStorageBucketContentPathParams
	QueryParams GetObjectStorageBucketContentQueryParams
	Security    GetObjectStorageBucketContentSecurity
}

type GetObjectStorageBucketContentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageBucketContentResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	GetObjectStorageBucketContent200ApplicationJSONAny        *interface{}
	GetObjectStorageBucketContentDefaultApplicationJSONObject *GetObjectStorageBucketContentDefaultApplicationJSON
}
