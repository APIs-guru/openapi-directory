package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1LocationsServicesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1LocationsServicesIDRequest struct {
    PathParams DeleteSetupV1LocationsServicesIDPathParams 
    
}

type DeleteSetupV1LocationsServicesIDResponse struct {
    ContentType string 
    LocationViewModel *shared.LocationViewModel 
    StatusCode int64 
    
}

