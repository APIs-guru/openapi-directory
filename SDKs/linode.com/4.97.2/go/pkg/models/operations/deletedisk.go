package operations

import (
"openapi/pkg/models/shared")

type DeleteDiskPathParams struct {
    DiskID int64 `pathParam:"style=simple,explode=false,name=diskId"`
    LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
    
}

type DeleteDiskSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteDiskSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteDiskSecurity struct {
    Option1 *DeleteDiskSecurityOption1 `security:"option"`
    Option2 *DeleteDiskSecurityOption2 `security:"option"`
    
}

type DeleteDiskRequest struct {
    PathParams DeleteDiskPathParams 
    Security DeleteDiskSecurity 
    
}

type DeleteDiskDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type DeleteDiskResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteDisk200ApplicationJSONObject map[string]interface{} 
    DeleteDiskDefaultApplicationJSONObject *DeleteDiskDefaultApplicationJSON 
    
}

