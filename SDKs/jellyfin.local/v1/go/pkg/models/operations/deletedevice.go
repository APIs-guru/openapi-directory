package operations

import (
"openapi/pkg/models/shared")

type DeleteDeviceQueryParams struct {
    ID string `queryParam:"style=form,explode=true,name=id"`
    
}

type DeleteDeviceSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteDeviceRequest struct {
    QueryParams DeleteDeviceQueryParams 
    Security DeleteDeviceSecurity 
    
}

type DeleteDeviceResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

