package operations

import (
"openapi/pkg/models/shared")

type DcimPowerPortsPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPowerPortsPartialUpdateRequest struct {
    PathParams DcimPowerPortsPartialUpdatePathParams 
    Request shared.WritablePowerPort `request:"mediaType=application/json"`
    
}

type DcimPowerPortsPartialUpdateResponse struct {
    ContentType string 
    PowerPort *shared.PowerPort 
    StatusCode int64 
    
}

