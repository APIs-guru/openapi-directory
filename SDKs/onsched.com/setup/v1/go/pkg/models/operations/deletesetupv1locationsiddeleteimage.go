package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1LocationsIDDeleteimagePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1LocationsIDDeleteimageRequest struct {
    PathParams DeleteSetupV1LocationsIDDeleteimagePathParams 
    
}

type DeleteSetupV1LocationsIDDeleteimageResponse struct {
    ContentType string 
    LocationViewModel *shared.LocationViewModel 
    StatusCode int64 
    
}

