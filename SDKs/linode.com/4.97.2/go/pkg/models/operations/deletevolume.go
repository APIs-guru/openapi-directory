package operations

import (
"openapi/pkg/models/shared")

type DeleteVolumePathParams struct {
    VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
    
}

type DeleteVolumeSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteVolumeSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteVolumeSecurity struct {
    Option1 *DeleteVolumeSecurityOption1 `security:"option"`
    Option2 *DeleteVolumeSecurityOption2 `security:"option"`
    
}

type DeleteVolumeRequest struct {
    PathParams DeleteVolumePathParams 
    Security DeleteVolumeSecurity 
    
}

type DeleteVolumeDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type DeleteVolumeResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteVolume200ApplicationJSONObject map[string]interface{} 
    DeleteVolumeDefaultApplicationJSONObject *DeleteVolumeDefaultApplicationJSON 
    
}

