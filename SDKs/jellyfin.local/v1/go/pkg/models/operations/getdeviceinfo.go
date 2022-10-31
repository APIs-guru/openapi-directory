package operations

import (
"openapi/pkg/models/shared")

type GetDeviceInfoQueryParams struct {
    ID string `queryParam:"style=form,explode=true,name=id"`
    
}

type GetDeviceInfoSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDeviceInfoRequest struct {
    QueryParams GetDeviceInfoQueryParams 
    Security GetDeviceInfoSecurity 
    
}

type GetDeviceInfoResponse struct {
    ContentType string 
    DeviceInfo *shared.DeviceInfo 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

