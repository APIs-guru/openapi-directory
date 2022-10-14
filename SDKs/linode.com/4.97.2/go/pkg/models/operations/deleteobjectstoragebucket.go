package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteObjectStorageBucketServers = []string{
	"https://api.linode.com/v4",
}

type DeleteObjectStorageBucketPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type DeleteObjectStorageBucketSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteObjectStorageBucketSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteObjectStorageBucketSecurity struct {
	Option1 *DeleteObjectStorageBucketSecurityOption1 `security:"option"`
	Option2 *DeleteObjectStorageBucketSecurityOption2 `security:"option"`
}

type DeleteObjectStorageBucketRequest struct {
	ServerURL  *string
	PathParams DeleteObjectStorageBucketPathParams
	Security   DeleteObjectStorageBucketSecurity
}

type DeleteObjectStorageBucketDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteObjectStorageBucketResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	DeleteObjectStorageBucket200ApplicationJSONObject     map[string]interface{}
	DeleteObjectStorageBucketDefaultApplicationJSONObject *DeleteObjectStorageBucketDefaultApplicationJSON
}
