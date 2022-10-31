package operations

import (
"openapi/pkg/models/shared")
var DeleteObjectStorageKeyServers = []string{
	"https://api.linode.com/v4",
}

type DeleteObjectStorageKeyPathParams struct {
    KeyID int64 `pathParam:"style=simple,explode=false,name=keyId"`
    
}

type DeleteObjectStorageKeySecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteObjectStorageKeySecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteObjectStorageKeySecurity struct {
    Option1 *DeleteObjectStorageKeySecurityOption1 `security:"option"`
    Option2 *DeleteObjectStorageKeySecurityOption2 `security:"option"`
    
}

type DeleteObjectStorageKeyRequest struct {
    ServerURL *string 
    PathParams DeleteObjectStorageKeyPathParams 
    Security DeleteObjectStorageKeySecurity 
    
}

type DeleteObjectStorageKeyDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type DeleteObjectStorageKeyResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteObjectStorageKey200ApplicationJSONObject map[string]interface{} 
    DeleteObjectStorageKeyDefaultApplicationJSONObject *DeleteObjectStorageKeyDefaultApplicationJSON 
    
}

