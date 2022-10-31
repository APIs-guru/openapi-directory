package operations

import (
"openapi/pkg/models/shared")

type AddLinodeIPPathParams struct {
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type AddLinodeIPSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type AddLinodeIPSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type AddLinodeIPSecurity struct {
    Option1 *AddLinodeIPSecurityOption1 `security:"option"`
    Option2 *AddLinodeIPSecurityOption2 `security:"option"`
    
}

type AddLinodeIPRequest struct {
    PathParams AddLinodeIPPathParams 
    Request interface{} `request:"mediaType=application/json"`
    Security AddLinodeIPSecurity 
    
}

type AddLinodeIPDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type AddLinodeIPResponse struct {
    ContentType string 
    IPAddress *shared.IPAddress 
    StatusCode int64 
    AddLinodeIPDefaultApplicationJSONObject *AddLinodeIPDefaultApplicationJSON 
    
}

