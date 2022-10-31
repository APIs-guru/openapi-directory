package operations

import (
"openapi/pkg/models/shared")

type StopEncodingProcessQueryParams struct {
    DeviceID *string `queryParam:"style=form,explode=true,name=deviceId"`
    PlaySessionID *string `queryParam:"style=form,explode=true,name=playSessionId"`
    
}

type StopEncodingProcessSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type StopEncodingProcessRequest struct {
    QueryParams StopEncodingProcessQueryParams 
    Security StopEncodingProcessSecurity 
    
}

type StopEncodingProcessResponse struct {
    ContentType string 
    StatusCode int64 
    
}

