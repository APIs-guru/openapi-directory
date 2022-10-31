package operations

import (
"openapi/pkg/models/shared")
var UpdateObjectStorageBucketAccessServers = []string{
	"https://api.linode.com/v4",
}

type UpdateObjectStorageBucketAccessPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
    
}

type UpdateObjectStorageBucketAccessSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateObjectStorageBucketAccessSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateObjectStorageBucketAccessSecurity struct {
    Option1 *UpdateObjectStorageBucketAccessSecurityOption1 `security:"option"`
    Option2 *UpdateObjectStorageBucketAccessSecurityOption2 `security:"option"`
    
}

type UpdateObjectStorageBucketAccessRequest struct {
    ServerURL *string 
    PathParams UpdateObjectStorageBucketAccessPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    Security UpdateObjectStorageBucketAccessSecurity 
    
}

type UpdateObjectStorageBucketAccessDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateObjectStorageBucketAccessResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateObjectStorageBucketAccess200ApplicationJSONObject map[string]interface{} 
    UpdateObjectStorageBucketAccessDefaultApplicationJSONObject *UpdateObjectStorageBucketAccessDefaultApplicationJSON 
    
}

