package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1ServicesIDBlockPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostSetupV1ServicesIDBlockRequests struct {
    ServiceBlockInputModel *shared.ServiceBlockInputModel `request:"mediaType=application/*+json"`
    ServiceBlockInputModel1 *shared.ServiceBlockInputModel `request:"mediaType=application/json"`
    ServiceBlockInputModel2 *shared.ServiceBlockInputModel `request:"mediaType=application/json-patch+json"`
    ServiceBlockInputModel3 *shared.ServiceBlockInputModel `request:"mediaType=text/json"`
    
}

type PostSetupV1ServicesIDBlockRequest struct {
    PathParams PostSetupV1ServicesIDBlockPathParams 
    Request *PostSetupV1ServicesIDBlockRequests 
    
}

type PostSetupV1ServicesIDBlockResponse struct {
    ContentType string 
    ServiceBlockViewModel *shared.ServiceBlockViewModel 
    StatusCode int64 
    
}

