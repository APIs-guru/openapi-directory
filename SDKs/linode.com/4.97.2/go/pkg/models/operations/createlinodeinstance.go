package operations

import (
"openapi/pkg/models/shared")

type CreateLinodeInstanceRequestBody struct {
    AuthorizedKeys []string `json:"authorized_keys,omitempty"`
    AuthorizedUsers []string `json:"authorized_users,omitempty"`
    BackupID *int64 `json:"backup_id,omitempty"`
    BackupsEnabled *bool `json:"backups_enabled,omitempty"`
    Booted *bool `json:"booted,omitempty"`
    Group *string `json:"group,omitempty"`
    Image *string `json:"image,omitempty"`
    Interfaces []shared.LinodeConfigInterface `json:"interfaces,omitempty"`
    Label *string `json:"label,omitempty"`
    PrivateIP *bool `json:"private_ip,omitempty"`
    Region string `json:"region"`
    RootPass *string `json:"root_pass,omitempty"`
    StackscriptData map[string]interface{} `json:"stackscript_data,omitempty"`
    StackscriptID *int64 `json:"stackscript_id,omitempty"`
    SwapSize *int64 `json:"swap_size,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Type string `json:"type"`
    
}

type CreateLinodeInstanceSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateLinodeInstanceSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateLinodeInstanceSecurity struct {
    Option1 *CreateLinodeInstanceSecurityOption1 `security:"option"`
    Option2 *CreateLinodeInstanceSecurityOption2 `security:"option"`
    
}

type CreateLinodeInstanceRequest struct {
    Request CreateLinodeInstanceRequestBody `request:"mediaType=application/json"`
    Security CreateLinodeInstanceSecurity 
    
}

type CreateLinodeInstanceDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateLinodeInstanceResponse struct {
    ContentType string 
    Linode *shared.Linode 
    StatusCode int64 
    CreateLinodeInstanceDefaultApplicationJSONObject *CreateLinodeInstanceDefaultApplicationJSON 
    
}

