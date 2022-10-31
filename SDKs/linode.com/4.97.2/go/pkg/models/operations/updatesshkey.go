package operations

import (
"openapi/pkg/models/shared")

type UpdateSSHKeyPathParams struct {
    SSHKeyID int64 `pathParam:"style=simple,explode=false,name=sshKeyId"`
    
}

type UpdateSSHKeySecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateSSHKeySecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateSSHKeySecurity struct {
    Option1 *UpdateSSHKeySecurityOption1 `security:"option"`
    Option2 *UpdateSSHKeySecurityOption2 `security:"option"`
    
}

type UpdateSSHKeyRequest struct {
    PathParams UpdateSSHKeyPathParams 
    Request shared.SSHKey `request:"mediaType=application/json"`
    Security UpdateSSHKeySecurity 
    
}

type UpdateSSHKeyDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateSSHKeyResponse struct {
    ContentType string 
    SSHKey *shared.SSHKey 
    StatusCode int64 
    UpdateSSHKeyDefaultApplicationJSONObject *UpdateSSHKeyDefaultApplicationJSON 
    
}

