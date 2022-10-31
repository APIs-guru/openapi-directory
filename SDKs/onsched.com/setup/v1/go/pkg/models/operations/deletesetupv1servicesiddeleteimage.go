package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1ServicesIDDeleteimagePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1ServicesIDDeleteimageRequest struct {
    PathParams DeleteSetupV1ServicesIDDeleteimagePathParams 
    
}

type DeleteSetupV1ServicesIDDeleteimageResponse struct {
    ContentType string 
    ServiceViewModel *shared.ServiceViewModel 
    StatusCode int64 
    
}

