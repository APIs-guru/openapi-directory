package operations

import (
"openapi/pkg/models/shared")

type GetSSHKeyPathParams struct {
    SSHKeyID int64 `pathParam:"style=simple,explode=false,name=sshKeyId"`
    
}

type GetSSHKeySecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetSSHKeySecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetSSHKeySecurity struct {
    Option1 *GetSSHKeySecurityOption1 `security:"option"`
    Option2 *GetSSHKeySecurityOption2 `security:"option"`
    
}

type GetSSHKeyRequest struct {
    PathParams GetSSHKeyPathParams 
    Security GetSSHKeySecurity 
    
}

type GetSSHKeyDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetSSHKeyResponse struct {
    ContentType string 
    SSHKey *shared.SSHKey 
    StatusCode int64 
    GetSSHKeyDefaultApplicationJSONObject *GetSSHKeyDefaultApplicationJSON 
    
}

