package operations

import (
"openapi/pkg/models/shared")

type GetDevicesSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetDevicesSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetDevicesSecurity struct {
    Option1 *GetDevicesSecurityOption1 `security:"option"`
    Option2 *GetDevicesSecurityOption2 `security:"option"`
    
}

type GetDevicesRequest struct {
    Security GetDevicesSecurity 
    
}

type GetDevices200ApplicationJSON struct {
    Data []shared.TrustedDevice `json:"data,omitempty"`
    Page *int64 `json:"page,omitempty"`
    Pages *int64 `json:"pages,omitempty"`
    Results *int64 `json:"results,omitempty"`
    
}

type GetDevicesDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetDevicesResponse struct {
    ContentType string 
    StatusCode int64 
    GetDevices200ApplicationJSONObject *GetDevices200ApplicationJSON 
    GetDevicesDefaultApplicationJSONObject *GetDevicesDefaultApplicationJSON 
    
}

