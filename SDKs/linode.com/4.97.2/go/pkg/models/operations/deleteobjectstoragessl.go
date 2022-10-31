package operations

import (
"openapi/pkg/models/shared")
var DeleteObjectStorageSslServers = []string{
	"https://api.linode.com/v4",
}

type DeleteObjectStorageSslPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
    
}

type DeleteObjectStorageSslSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteObjectStorageSslSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteObjectStorageSslSecurity struct {
    Option1 *DeleteObjectStorageSslSecurityOption1 `security:"option"`
    Option2 *DeleteObjectStorageSslSecurityOption2 `security:"option"`
    
}

type DeleteObjectStorageSslRequest struct {
    ServerURL *string 
    PathParams DeleteObjectStorageSslPathParams 
    Security DeleteObjectStorageSslSecurity 
    
}

type DeleteObjectStorageSslDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type DeleteObjectStorageSslResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteObjectStorageSsl200ApplicationJSONObject map[string]interface{} 
    DeleteObjectStorageSslDefaultApplicationJSONObject *DeleteObjectStorageSslDefaultApplicationJSON 
    
}

