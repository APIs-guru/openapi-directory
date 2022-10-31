package operations

import (
"openapi/pkg/models/shared")

type DcimPowerPortsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPowerPortsReadRequest struct {
    PathParams DcimPowerPortsReadPathParams 
    
}

type DcimPowerPortsReadResponse struct {
    ContentType string 
    PowerPort *shared.PowerPort 
    StatusCode int64 
    
}

