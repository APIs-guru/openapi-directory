package operations

import (
"openapi/pkg/models/shared")

type DcimRearPortsTracePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRearPortsTraceRequest struct {
    PathParams DcimRearPortsTracePathParams 
    
}

type DcimRearPortsTraceResponse struct {
    ContentType string 
    RearPort *shared.RearPort 
    StatusCode int64 
    
}

