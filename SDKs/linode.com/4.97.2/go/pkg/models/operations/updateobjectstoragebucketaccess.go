package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateObjectStorageBucketAccessServerList = []string{
	"https://api.linode.com/v4",
}

type UpdateObjectStorageBucketAccessPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type UpdateObjectStorageBucketAccessSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateObjectStorageBucketAccessDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateObjectStorageBucketAccessRequest struct {
	ServerURL  *string
	PathParams UpdateObjectStorageBucketAccessPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   UpdateObjectStorageBucketAccessSecurity
}

type UpdateObjectStorageBucketAccessResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	UpdateObjectStorageBucketAccess200ApplicationJSONObject     map[string]interface{}
	UpdateObjectStorageBucketAccessDefaultApplicationJSONObject *UpdateObjectStorageBucketAccessDefaultApplicationJSON
}
