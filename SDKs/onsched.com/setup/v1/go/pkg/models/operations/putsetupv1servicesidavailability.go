package operations

import (
"openapi/pkg/models/shared")

type PutSetupV1ServicesIDAvailabilityPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSetupV1ServicesIDAvailabilityRequests struct {
    AvailabilityInputModel *shared.AvailabilityInputModel `request:"mediaType=application/*+json"`
    AvailabilityInputModel1 *shared.AvailabilityInputModel `request:"mediaType=application/json"`
    AvailabilityInputModel2 *shared.AvailabilityInputModel `request:"mediaType=application/json-patch+json"`
    AvailabilityInputModel3 *shared.AvailabilityInputModel `request:"mediaType=text/json"`
    
}

type PutSetupV1ServicesIDAvailabilityRequest struct {
    PathParams PutSetupV1ServicesIDAvailabilityPathParams 
    Request *PutSetupV1ServicesIDAvailabilityRequests 
    
}

type PutSetupV1ServicesIDAvailabilityResponse struct {
    ContentType string 
    ServiceAvailabilityViewModel *shared.ServiceAvailabilityViewModel 
    StatusCode int64 
    
}

