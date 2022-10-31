package operations

import (
"openapi/pkg/models/shared")

type VerifyCheckPathParams struct {
    Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
    
}

type VerifyCheckRequest struct {
    PathParams VerifyCheckPathParams 
    Request shared.CheckRequest `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type VerifyCheckResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    VerifyCheck200ApplicationJSONOneOf *interface{} 
    
}

