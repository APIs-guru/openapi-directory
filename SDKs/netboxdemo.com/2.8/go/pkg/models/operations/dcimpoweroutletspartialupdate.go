package operations

import (
"openapi/pkg/models/shared")

type DcimPowerOutletsPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPowerOutletsPartialUpdateRequest struct {
    PathParams DcimPowerOutletsPartialUpdatePathParams 
    Request shared.WritablePowerOutlet `request:"mediaType=application/json"`
    
}

type DcimPowerOutletsPartialUpdateResponse struct {
    ContentType string 
    PowerOutlet *shared.PowerOutlet 
    StatusCode int64 
    
}

