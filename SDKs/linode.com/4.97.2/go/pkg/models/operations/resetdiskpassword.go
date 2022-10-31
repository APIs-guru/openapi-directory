package operations

import (
"openapi/pkg/models/shared")

type ResetDiskPasswordPathParams struct {
    DiskID int64 `pathParam:"style=simple,explode=false,name=diskId"`
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type ResetDiskPasswordSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type ResetDiskPasswordSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type ResetDiskPasswordSecurity struct {
    Option1 *ResetDiskPasswordSecurityOption1 `security:"option"`
    Option2 *ResetDiskPasswordSecurityOption2 `security:"option"`
    
}

type ResetDiskPasswordRequest struct {
    PathParams ResetDiskPasswordPathParams 
    Request interface{} `request:"mediaType=application/json"`
    Security ResetDiskPasswordSecurity 
    
}

type ResetDiskPasswordDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type ResetDiskPasswordResponse struct {
    ContentType string 
    StatusCode int64 
    ResetDiskPassword200ApplicationJSONObject map[string]interface{} 
    ResetDiskPasswordDefaultApplicationJSONObject *ResetDiskPasswordDefaultApplicationJSON 
    
}

