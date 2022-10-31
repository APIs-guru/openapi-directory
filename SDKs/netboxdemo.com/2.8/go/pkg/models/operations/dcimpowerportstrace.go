package operations

import (
"openapi/pkg/models/shared")

type DcimPowerPortsTracePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPowerPortsTraceRequest struct {
    PathParams DcimPowerPortsTracePathParams 
    
}

type DcimPowerPortsTraceResponse struct {
    ContentType string 
    PowerPort *shared.PowerPort 
    StatusCode int64 
    
}

