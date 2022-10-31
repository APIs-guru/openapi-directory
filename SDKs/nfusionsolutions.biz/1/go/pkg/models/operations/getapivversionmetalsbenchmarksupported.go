package operations

import (
"openapi/pkg/models/shared")

type GetAPIVVersionMetalsBenchmarkSupportedPathParams struct {
    Version string `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetAPIVVersionMetalsBenchmarkSupportedQueryParams struct {
    Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type GetAPIVVersionMetalsBenchmarkSupportedRequest struct {
    PathParams GetAPIVVersionMetalsBenchmarkSupportedPathParams 
    QueryParams GetAPIVVersionMetalsBenchmarkSupportedQueryParams 
    
}

type GetAPIVVersionMetalsBenchmarkSupportedResponse struct {
    Body []byte 
    ContentType string 
    GetAPIVVersionMetalsBenchmarkSupported200ApplicationJSONStrings []string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

