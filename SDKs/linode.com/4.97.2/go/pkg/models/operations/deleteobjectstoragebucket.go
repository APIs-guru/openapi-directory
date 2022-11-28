package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteObjectStorageBucketServerList = []string{
	"https://api.linode.com/v4",
}

type DeleteObjectStorageBucketPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type DeleteObjectStorageBucketSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteObjectStorageBucketDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteObjectStorageBucketRequest struct {
	ServerURL  *string
	PathParams DeleteObjectStorageBucketPathParams
	Security   DeleteObjectStorageBucketSecurity
}

type DeleteObjectStorageBucketResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	DeleteObjectStorageBucket200ApplicationJSONObject     map[string]interface{}
	DeleteObjectStorageBucketDefaultApplicationJSONObject *DeleteObjectStorageBucketDefaultApplicationJSON
}
