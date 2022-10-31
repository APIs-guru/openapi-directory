package operations

import (
"openapi/pkg/models/shared")

type DcimPowerFeedsPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimPowerFeedsPartialUpdateRequest struct {
    PathParams DcimPowerFeedsPartialUpdatePathParams 
    Request shared.WritablePowerFeed `request:"mediaType=application/json"`
    
}

type DcimPowerFeedsPartialUpdateResponse struct {
    ContentType string 
    PowerFeed *shared.PowerFeed 
    StatusCode int64 
    
}

