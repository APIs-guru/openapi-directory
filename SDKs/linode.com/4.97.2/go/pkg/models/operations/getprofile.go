package operations

import (
"openapi/pkg/models/shared")

type GetProfileSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetProfileSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetProfileSecurity struct {
    Option1 *GetProfileSecurityOption1 `security:"option"`
    Option2 *GetProfileSecurityOption2 `security:"option"`
    
}

type GetProfileRequest struct {
    Security GetProfileSecurity 
    
}

type GetProfileDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetProfileResponse struct {
    ContentType string 
    Profile *shared.Profile 
    StatusCode int64 
    GetProfileDefaultApplicationJSONObject *GetProfileDefaultApplicationJSON 
    
}

