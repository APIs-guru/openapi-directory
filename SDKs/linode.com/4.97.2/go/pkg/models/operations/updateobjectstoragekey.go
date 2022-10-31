package operations

import (
"openapi/pkg/models/shared")
var UpdateObjectStorageKeyServers = []string{
	"https://api.linode.com/v4",
}

type UpdateObjectStorageKeyPathParams struct {
    KeyID int64 `pathParam:"style=simple,explode=false,name=keyId"`
    
}

type UpdateObjectStorageKeyRequestBody struct {
    Label *string `json:"label,omitempty"`
    
}

type UpdateObjectStorageKeySecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateObjectStorageKeySecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateObjectStorageKeySecurity struct {
    Option1 *UpdateObjectStorageKeySecurityOption1 `security:"option"`
    Option2 *UpdateObjectStorageKeySecurityOption2 `security:"option"`
    
}

type UpdateObjectStorageKeyRequest struct {
    ServerURL *string 
    PathParams UpdateObjectStorageKeyPathParams 
    Request *UpdateObjectStorageKeyRequestBody `request:"mediaType=application/json"`
    Security UpdateObjectStorageKeySecurity 
    
}

type UpdateObjectStorageKeyDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateObjectStorageKeyResponse struct {
    ContentType string 
    ObjectStorageKey *shared.ObjectStorageKey 
    StatusCode int64 
    UpdateObjectStorageKeyDefaultApplicationJSONObject *UpdateObjectStorageKeyDefaultApplicationJSON 
    
}

