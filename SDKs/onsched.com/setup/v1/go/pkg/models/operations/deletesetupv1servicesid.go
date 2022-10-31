package operations

import (
"openapi/pkg/models/shared")

type DeleteSetupV1ServicesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSetupV1ServicesIDRequest struct {
    PathParams DeleteSetupV1ServicesIDPathParams 
    
}

type DeleteSetupV1ServicesIDResponse struct {
    ContentType string 
    ServiceViewModel *shared.ServiceViewModel 
    StatusCode int64 
    
}

