package operations

import (
"openapi/pkg/models/shared")
var CreateObjectStorageKeysServers = []string{
	"https://api.linode.com/v4",
}

type CreateObjectStorageKeysSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateObjectStorageKeysSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateObjectStorageKeysSecurity struct {
    Option1 *CreateObjectStorageKeysSecurityOption1 `security:"option"`
    Option2 *CreateObjectStorageKeysSecurityOption2 `security:"option"`
    
}

type CreateObjectStorageKeysRequest struct {
    ServerURL *string 
    Request *shared.ObjectStorageKey `request:"mediaType=application/json"`
    Security CreateObjectStorageKeysSecurity 
    
}

type CreateObjectStorageKeysDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateObjectStorageKeysResponse struct {
    ContentType string 
    ObjectStorageKey *shared.ObjectStorageKey 
    StatusCode int64 
    CreateObjectStorageKeysDefaultApplicationJSONObject *CreateObjectStorageKeysDefaultApplicationJSON 
    
}

