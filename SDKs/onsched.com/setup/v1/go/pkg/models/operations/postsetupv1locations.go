package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1LocationsRequests struct {
    LocationInputModel *shared.LocationInputModel `request:"mediaType=application/*+json"`
    LocationInputModel1 *shared.LocationInputModel `request:"mediaType=application/json"`
    LocationInputModel2 *shared.LocationInputModel `request:"mediaType=application/json-patch+json"`
    LocationInputModel3 *shared.LocationInputModel `request:"mediaType=text/json"`
    
}

type PostSetupV1LocationsRequest struct {
    Request *PostSetupV1LocationsRequests 
    
}

type PostSetupV1LocationsResponse struct {
    ContentType string 
    LocationViewModel *shared.LocationViewModel 
    StatusCode int64 
    
}

