package operations

import (
"openapi/pkg/models/shared")

type GetTrustedDevicePathParams struct {
    DeviceID int64 `pathParam:"style=simple,explode=false,name=deviceId"`
    
}

type GetTrustedDeviceSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetTrustedDeviceSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetTrustedDeviceSecurity struct {
    Option1 *GetTrustedDeviceSecurityOption1 `security:"option"`
    Option2 *GetTrustedDeviceSecurityOption2 `security:"option"`
    
}

type GetTrustedDeviceRequest struct {
    PathParams GetTrustedDevicePathParams 
    Security GetTrustedDeviceSecurity 
    
}

type GetTrustedDeviceDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetTrustedDeviceResponse struct {
    ContentType string 
    StatusCode int64 
    TrustedDevice *shared.TrustedDevice 
    GetTrustedDeviceDefaultApplicationJSONObject *GetTrustedDeviceDefaultApplicationJSON 
    
}

