package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1ResourcesIDAvailabilityPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1ResourcesIDAvailabilityRequest struct {
    PathParams GetSetupV1ResourcesIDAvailabilityPathParams 
    
}

type GetSetupV1ResourcesIDAvailabilityResponse struct {
    ContentType string 
    ResourceAvailabilityViewModel *shared.ResourceAvailabilityViewModel 
    StatusCode int64 
    
}

