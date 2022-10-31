package operations

import (
"openapi/pkg/models/shared")

type AddSSHKeySecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type AddSSHKeySecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type AddSSHKeySecurity struct {
    Option1 *AddSSHKeySecurityOption1 `security:"option"`
    Option2 *AddSSHKeySecurityOption2 `security:"option"`
    
}

type AddSSHKeyRequest struct {
    Request *shared.SSHKeyRequest `request:"mediaType=application/json"`
    Security AddSSHKeySecurity 
    
}

type AddSSHKeyDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type AddSSHKeyResponse struct {
    ContentType string 
    SSHKey *shared.SSHKey 
    StatusCode int64 
    AddSSHKeyDefaultApplicationJSONObject *AddSSHKeyDefaultApplicationJSON 
    
}

