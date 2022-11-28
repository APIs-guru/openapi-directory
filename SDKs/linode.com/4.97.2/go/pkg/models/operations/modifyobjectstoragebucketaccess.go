package operations

import (
	"openapi/pkg/models/shared"
)

var ModifyObjectStorageBucketAccessServerList = []string{
	"https://api.linode.com/v4",
}

type ModifyObjectStorageBucketAccessPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type ModifyObjectStorageBucketAccessSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type ModifyObjectStorageBucketAccessDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ModifyObjectStorageBucketAccessRequest struct {
	ServerURL  *string
	PathParams ModifyObjectStorageBucketAccessPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   ModifyObjectStorageBucketAccessSecurity
}

type ModifyObjectStorageBucketAccessResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	ModifyObjectStorageBucketAccess200ApplicationJSONObject     map[string]interface{}
	ModifyObjectStorageBucketAccessDefaultApplicationJSONObject *ModifyObjectStorageBucketAccessDefaultApplicationJSON
}
