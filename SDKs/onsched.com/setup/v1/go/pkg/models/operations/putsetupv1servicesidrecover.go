package operations

import (
"openapi/pkg/models/shared")

type PutSetupV1ServicesIDRecoverPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSetupV1ServicesIDRecoverRequest struct {
    PathParams PutSetupV1ServicesIDRecoverPathParams 
    
}

type PutSetupV1ServicesIDRecoverResponse struct {
    ContentType string 
    ServiceViewModel *shared.ServiceViewModel 
    StatusCode int64 
    
}

