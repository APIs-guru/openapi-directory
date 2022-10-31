package operations

import (
"openapi/pkg/models/shared")
var GetObjectStorageBucketServers = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageBucketPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
    
}

type GetObjectStorageBucketSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetObjectStorageBucketSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetObjectStorageBucketSecurity struct {
    Option1 *GetObjectStorageBucketSecurityOption1 `security:"option"`
    Option2 *GetObjectStorageBucketSecurityOption2 `security:"option"`
    
}

type GetObjectStorageBucketRequest struct {
    ServerURL *string 
    PathParams GetObjectStorageBucketPathParams 
    Security GetObjectStorageBucketSecurity 
    
}

type GetObjectStorageBucketDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetObjectStorageBucketResponse struct {
    ContentType string 
    ObjectStorageBucket *shared.ObjectStorageBucket 
    StatusCode int64 
    GetObjectStorageBucketDefaultApplicationJSONObject *GetObjectStorageBucketDefaultApplicationJSON 
    
}

