package operations

import (
"openapi/pkg/models/shared")

type GetBitrateTestBytesQueryParams struct {
    Size *int32 `queryParam:"style=form,explode=true,name=size"`
    
}

type GetBitrateTestBytesSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetBitrateTestBytesRequest struct {
    QueryParams GetBitrateTestBytesQueryParams 
    Security GetBitrateTestBytesSecurity 
    
}

type GetBitrateTestBytesResponse struct {
    Body []byte 
    ContentType string 
    GetBitrateTestBytes200ApplicationOctetStreamBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

