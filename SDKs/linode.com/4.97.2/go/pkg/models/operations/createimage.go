package operations

import (
"openapi/pkg/models/shared")

type CreateImageSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateImageSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateImageSecurity struct {
    Option1 *CreateImageSecurityOption1 `security:"option"`
    Option2 *CreateImageSecurityOption2 `security:"option"`
    
}

type CreateImageRequest struct {
    Request *interface{} `request:"mediaType=application/json"`
    Security CreateImageSecurity 
    
}

type CreateImageDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateImageResponse struct {
    ContentType string 
    ImagePrivate *shared.ImagePrivate 
    StatusCode int64 
    CreateImageDefaultApplicationJSONObject *CreateImageDefaultApplicationJSON 
    
}

