package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1LocationsIDServicesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1LocationsIDServicesRequest struct {
    PathParams DeleteSetupV1LocationsIDServicesPathParams 
    
}

type DeleteSetupV1LocationsIDServicesResponse struct {
    ContentType string 
    LocationViewModel *shared.LocationViewModel 
    StatusCode int64 
    
}

