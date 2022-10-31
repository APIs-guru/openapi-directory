package operations

import (
"openapi/pkg/models/shared")

type DcimPowerPortsCreateRequest struct {
    Request shared.WritablePowerPort `request:"mediaType=application/json"`
    
}

type DcimPowerPortsCreateResponse struct {
    ContentType string 
    PowerPort *shared.PowerPort 
    StatusCode int64 
    
}

