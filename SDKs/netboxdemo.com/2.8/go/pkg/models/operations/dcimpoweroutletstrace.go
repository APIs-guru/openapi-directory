package operations

import (
"openapi/pkg/models/shared")

type DcimPowerOutletsTracePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPowerOutletsTraceRequest struct {
    PathParams DcimPowerOutletsTracePathParams 
    
}

type DcimPowerOutletsTraceResponse struct {
    ContentType string 
    PowerOutlet *shared.PowerOutlet 
    StatusCode int64 
    
}

