package operations

import (
"openapi/pkg/models/shared")
var GetObjectStorageKeyServers = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageKeyPathParams struct {
    KeyID int64 `pathParam:"style=simple,explode=false,name=keyId"`
    
}

type GetObjectStorageKeySecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetObjectStorageKeySecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetObjectStorageKeySecurity struct {
    Option1 *GetObjectStorageKeySecurityOption1 `security:"option"`
    Option2 *GetObjectStorageKeySecurityOption2 `security:"option"`
    
}

type GetObjectStorageKeyRequest struct {
    ServerURL *string 
    PathParams GetObjectStorageKeyPathParams 
    Security GetObjectStorageKeySecurity 
    
}

type GetObjectStorageKeyDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetObjectStorageKeyResponse struct {
    ContentType string 
    ObjectStorageKey *shared.ObjectStorageKey 
    StatusCode int64 
    GetObjectStorageKeyDefaultApplicationJSONObject *GetObjectStorageKeyDefaultApplicationJSON 
    
}

