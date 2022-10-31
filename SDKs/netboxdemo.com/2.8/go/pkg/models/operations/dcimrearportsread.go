package operations

import (
"openapi/pkg/models/shared")

type DcimRearPortsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRearPortsReadRequest struct {
    PathParams DcimRearPortsReadPathParams 
    
}

type DcimRearPortsReadResponse struct {
    ContentType string 
    RearPort *shared.RearPort 
    StatusCode int64 
    
}

