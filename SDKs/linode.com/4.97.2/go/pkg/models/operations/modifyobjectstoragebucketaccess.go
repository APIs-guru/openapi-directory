package operations

import (
	"openapi/pkg/models/shared"
)

var ModifyObjectStorageBucketAccessServers = []string{
	"https://api.linode.com/v4",
}

type ModifyObjectStorageBucketAccessPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type ModifyObjectStorageBucketAccessSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type ModifyObjectStorageBucketAccessSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type ModifyObjectStorageBucketAccessSecurity struct {
	Option1 *ModifyObjectStorageBucketAccessSecurityOption1 `security:"option"`
	Option2 *ModifyObjectStorageBucketAccessSecurityOption2 `security:"option"`
}

type ModifyObjectStorageBucketAccessRequest struct {
	ServerURL  *string
	PathParams ModifyObjectStorageBucketAccessPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   ModifyObjectStorageBucketAccessSecurity
}

type ModifyObjectStorageBucketAccessDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ModifyObjectStorageBucketAccessResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	ModifyObjectStorageBucketAccess200ApplicationJSONObject     map[string]interface{}
	ModifyObjectStorageBucketAccessDefaultApplicationJSONObject *ModifyObjectStorageBucketAccessDefaultApplicationJSON
}
