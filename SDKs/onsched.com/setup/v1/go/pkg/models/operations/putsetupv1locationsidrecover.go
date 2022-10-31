package operations

import (
"openapi/pkg/models/shared")

type PutSetupV1LocationsIDRecoverPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSetupV1LocationsIDRecoverRequest struct {
    PathParams PutSetupV1LocationsIDRecoverPathParams 
    
}

type PutSetupV1LocationsIDRecoverResponse struct {
    ContentType string 
    LocationViewModel *shared.LocationViewModel 
    StatusCode int64 
    
}

