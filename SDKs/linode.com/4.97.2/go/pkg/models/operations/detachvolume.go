package operations

import (
"openapi/pkg/models/shared")

type DetachVolumePathParams struct {
    VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
    
}

type DetachVolumeSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DetachVolumeSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DetachVolumeSecurity struct {
    Option1 *DetachVolumeSecurityOption1 `security:"option"`
    Option2 *DetachVolumeSecurityOption2 `security:"option"`
    
}

type DetachVolumeRequest struct {
    PathParams DetachVolumePathParams 
    Security DetachVolumeSecurity 
    
}

type DetachVolumeDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type DetachVolumeResponse struct {
    ContentType string 
    StatusCode int64 
    DetachVolume200ApplicationJSONObject map[string]interface{} 
    DetachVolumeDefaultApplicationJSONObject *DetachVolumeDefaultApplicationJSON 
    
}

