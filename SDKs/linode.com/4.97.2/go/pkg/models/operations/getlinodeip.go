package operations

import (
"openapi/pkg/models/shared")

type GetLinodeIPPathParams struct {
    Address string `pathParam:"style=simple,explode=false,name=address"`
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type GetLinodeIPSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetLinodeIPSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetLinodeIPSecurity struct {
    Option1 *GetLinodeIPSecurityOption1 `security:"option"`
    Option2 *GetLinodeIPSecurityOption2 `security:"option"`
    
}

type GetLinodeIPRequest struct {
    PathParams GetLinodeIPPathParams 
    Security GetLinodeIPSecurity 
    
}

type GetLinodeIPDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetLinodeIPResponse struct {
    ContentType string 
    IPAddress *shared.IPAddress 
    StatusCode int64 
    GetLinodeIPDefaultApplicationJSONObject *GetLinodeIPDefaultApplicationJSON 
    
}

