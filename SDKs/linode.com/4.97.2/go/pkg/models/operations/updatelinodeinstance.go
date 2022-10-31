package operations

import (
"openapi/pkg/models/shared")

type UpdateLinodeInstancePathParams struct {
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type UpdateLinodeInstanceSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateLinodeInstanceSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateLinodeInstanceSecurity struct {
    Option1 *UpdateLinodeInstanceSecurityOption1 `security:"option"`
    Option2 *UpdateLinodeInstanceSecurityOption2 `security:"option"`
    
}

type UpdateLinodeInstanceRequest struct {
    PathParams UpdateLinodeInstancePathParams 
    Request shared.Linode `request:"mediaType=application/json"`
    Security UpdateLinodeInstanceSecurity 
    
}

type UpdateLinodeInstanceDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateLinodeInstanceResponse struct {
    ContentType string 
    Linode *shared.Linode 
    StatusCode int64 
    UpdateLinodeInstanceDefaultApplicationJSONObject *UpdateLinodeInstanceDefaultApplicationJSON 
    
}

