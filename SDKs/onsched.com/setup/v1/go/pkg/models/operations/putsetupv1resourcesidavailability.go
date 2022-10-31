package operations

import (
"openapi/pkg/models/shared")

type PutSetupV1ResourcesIDAvailabilityPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSetupV1ResourcesIDAvailabilityRequests struct {
    AvailabilityInputModel *shared.AvailabilityInputModel `request:"mediaType=application/*+json"`
    AvailabilityInputModel1 *shared.AvailabilityInputModel `request:"mediaType=application/json"`
    AvailabilityInputModel2 *shared.AvailabilityInputModel `request:"mediaType=application/json-patch+json"`
    AvailabilityInputModel3 *shared.AvailabilityInputModel `request:"mediaType=text/json"`
    
}

type PutSetupV1ResourcesIDAvailabilityRequest struct {
    PathParams PutSetupV1ResourcesIDAvailabilityPathParams 
    Request *PutSetupV1ResourcesIDAvailabilityRequests 
    
}

type PutSetupV1ResourcesIDAvailabilityResponse struct {
    ContentType string 
    ResourceAvailabilityViewModel *shared.ResourceAvailabilityViewModel 
    StatusCode int64 
    
}

