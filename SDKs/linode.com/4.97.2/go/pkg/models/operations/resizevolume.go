package operations

import (
"openapi/pkg/models/shared")

type ResizeVolumePathParams struct {
    VolumeID int64 `pathParam:"style=simple,explode=false,name=volumeId"`
    
}

type ResizeVolumeRequestBody struct {
    Size int64 `json:"size"`
    
}

type ResizeVolumeSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type ResizeVolumeSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type ResizeVolumeSecurity struct {
    Option1 *ResizeVolumeSecurityOption1 `security:"option"`
    Option2 *ResizeVolumeSecurityOption2 `security:"option"`
    
}

type ResizeVolumeRequest struct {
    PathParams ResizeVolumePathParams 
    Request ResizeVolumeRequestBody `request:"mediaType=application/json"`
    Security ResizeVolumeSecurity 
    
}

type ResizeVolumeDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type ResizeVolumeResponse struct {
    ContentType string 
    StatusCode int64 
    ResizeVolume200ApplicationJSONObject map[string]interface{} 
    ResizeVolumeDefaultApplicationJSONObject *ResizeVolumeDefaultApplicationJSON 
    
}

