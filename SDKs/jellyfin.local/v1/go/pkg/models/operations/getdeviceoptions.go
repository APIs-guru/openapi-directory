package operations

import (
"openapi/pkg/models/shared")

type GetDeviceOptionsQueryParams struct {
    ID string `queryParam:"style=form,explode=true,name=id"`
    
}

type GetDeviceOptionsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetDeviceOptionsRequest struct {
    QueryParams GetDeviceOptionsQueryParams 
    Security GetDeviceOptionsSecurity 
    
}

type GetDeviceOptionsResponse struct {
    ContentType string 
    DeviceOptions *shared.DeviceOptions 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

