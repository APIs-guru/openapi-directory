package operations

import (
"openapi/pkg/models/shared")

type ResizeDiskPathParams struct {
    DiskID int64 `pathParam:"style=simple,explode=false,name=diskId"`
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type ResizeDiskSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type ResizeDiskSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type ResizeDiskSecurity struct {
    Option1 *ResizeDiskSecurityOption1 `security:"option"`
    Option2 *ResizeDiskSecurityOption2 `security:"option"`
    
}

type ResizeDiskRequest struct {
    PathParams ResizeDiskPathParams 
    Request interface{} `request:"mediaType=application/json"`
    Security ResizeDiskSecurity 
    
}

type ResizeDiskDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type ResizeDiskResponse struct {
    ContentType string 
    StatusCode int64 
    ResizeDisk200ApplicationJSONObject map[string]interface{} 
    ResizeDiskDefaultApplicationJSONObject *ResizeDiskDefaultApplicationJSON 
    
}

