package operations

import (
"time"
"openapi/pkg/models/shared")

type AddStackScriptRequestBody struct {
    Created *time.Time `json:"created,omitempty"`
    DeploymentsActive *int64 `json:"deployments_active,omitempty"`
    DeploymentsTotal *int64 `json:"deployments_total,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Images []string `json:"images"`
    IsPublic *bool `json:"is_public,omitempty"`
    Label string `json:"label"`
    Mine *bool `json:"mine,omitempty"`
    RevNote *string `json:"rev_note,omitempty"`
    Script string `json:"script"`
    Updated *time.Time `json:"updated,omitempty"`
    UserDefinedFields []shared.UserDefinedField `json:"user_defined_fields,omitempty"`
    UserGravatarID *string `json:"user_gravatar_id,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

type AddStackScriptSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type AddStackScriptSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type AddStackScriptSecurity struct {
    Option1 *AddStackScriptSecurityOption1 `security:"option"`
    Option2 *AddStackScriptSecurityOption2 `security:"option"`
    
}

type AddStackScriptRequest struct {
    Request AddStackScriptRequestBody `request:"mediaType=application/json"`
    Security AddStackScriptSecurity 
    
}

type AddStackScriptDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type AddStackScriptResponse struct {
    ContentType string 
    StackScript *shared.StackScript 
    StatusCode int64 
    AddStackScriptDefaultApplicationJSONObject *AddStackScriptDefaultApplicationJSON 
    
}

