package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1ServicesIDAllocationsBulkPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostSetupV1ServicesIDAllocationsBulkRequests struct {
    ServiceAllocationsInputModel map[string]interface{} `request:"mediaType=application/*+json"`
    ServiceAllocationsInputModel1 map[string]interface{} `request:"mediaType=application/json"`
    ServiceAllocationsInputModel2 map[string]interface{} `request:"mediaType=application/json-patch+json"`
    ServiceAllocationsInputModel3 map[string]interface{} `request:"mediaType=text/json"`
    
}

type PostSetupV1ServicesIDAllocationsBulkRequest struct {
    PathParams PostSetupV1ServicesIDAllocationsBulkPathParams 
    Request *PostSetupV1ServicesIDAllocationsBulkRequests 
    
}

type PostSetupV1ServicesIDAllocationsBulkResponse struct {
    ContentType string 
    ServiceAllocationViewModels []shared.ServiceAllocationViewModel 
    StatusCode int64 
    
}

