package operations

import (
"openapi/pkg/models/shared")

type BootLinodeInstancePathParams struct {
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type BootLinodeInstanceRequestBody struct {
    ConfigID *int64 `json:"config_id,omitempty"`
    
}

type BootLinodeInstanceSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type BootLinodeInstanceSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type BootLinodeInstanceSecurity struct {
    Option1 *BootLinodeInstanceSecurityOption1 `security:"option"`
    Option2 *BootLinodeInstanceSecurityOption2 `security:"option"`
    
}

type BootLinodeInstanceRequest struct {
    PathParams BootLinodeInstancePathParams 
    Request *BootLinodeInstanceRequestBody `request:"mediaType=application/json"`
    Security BootLinodeInstanceSecurity 
    
}

type BootLinodeInstanceDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type BootLinodeInstanceResponse struct {
    ContentType string 
    StatusCode int64 
    BootLinodeInstance200ApplicationJSONObject map[string]interface{} 
    BootLinodeInstanceDefaultApplicationJSONObject *BootLinodeInstanceDefaultApplicationJSON 
    
}

