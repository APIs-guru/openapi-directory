package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageBucketContentServerList = []string{
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

type GetObjectStorageBucketContentSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetObjectStorageBucketContentDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageBucketContentRequest struct {
	ServerURL   *string
	PathParams  GetObjectStorageBucketContentPathParams
	QueryParams GetObjectStorageBucketContentQueryParams
	Security    GetObjectStorageBucketContentSecurity
}

type GetObjectStorageBucketContentResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	GetObjectStorageBucketContent200ApplicationJSONAny        *interface{}
	GetObjectStorageBucketContentDefaultApplicationJSONObject *GetObjectStorageBucketContentDefaultApplicationJSON
}
