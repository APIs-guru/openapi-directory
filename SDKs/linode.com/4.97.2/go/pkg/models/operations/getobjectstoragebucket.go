package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageBucketServerList = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageBucketPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetObjectStorageBucketSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetObjectStorageBucketDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageBucketRequest struct {
	ServerURL  *string
	PathParams GetObjectStorageBucketPathParams
	Security   GetObjectStorageBucketSecurity
}

type GetObjectStorageBucketResponse struct {
	ContentType                                        string
	ObjectStorageBucket                                *shared.ObjectStorageBucket
	StatusCode                                         int64
	GetObjectStorageBucketDefaultApplicationJSONObject *GetObjectStorageBucketDefaultApplicationJSON
}
