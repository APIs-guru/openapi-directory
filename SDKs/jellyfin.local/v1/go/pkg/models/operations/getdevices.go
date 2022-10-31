package operations

import (
"openapi/pkg/models/shared")

type GetDevicesQueryParams struct {
    SupportsSync *bool `queryParam:"style=form,explode=true,name=supportsSync"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetDevicesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDevicesRequest struct {
    QueryParams GetDevicesQueryParams 
    Security GetDevicesSecurity 
    
}

type GetDevicesResponse struct {
    ContentType string 
    DeviceInfoQueryResult *shared.DeviceInfoQueryResult 
    StatusCode int64 
    
}

