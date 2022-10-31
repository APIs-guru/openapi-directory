package operations

import (
"openapi/pkg/models/shared")

type DcimPowerFeedsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPowerFeedsReadRequest struct {
    PathParams DcimPowerFeedsReadPathParams 
    
}

type DcimPowerFeedsReadResponse struct {
    ContentType string 
    PowerFeed *shared.PowerFeed 
    StatusCode int64 
    
}

