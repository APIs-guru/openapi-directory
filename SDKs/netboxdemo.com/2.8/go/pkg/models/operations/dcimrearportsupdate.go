package operations

import (
"openapi/pkg/models/shared")

type DcimRearPortsUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRearPortsUpdateRequest struct {
    PathParams DcimRearPortsUpdatePathParams 
    Request shared.WritableRearPort `request:"mediaType=application/json"`
    
}

type DcimRearPortsUpdateResponse struct {
    ContentType string 
    RearPort *shared.RearPort 
    StatusCode int64 
    
}

