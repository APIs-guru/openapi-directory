package operations

import (
"openapi/pkg/models/shared")

type PutConsumerV1CustomersIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutConsumerV1CustomersIDRequests struct {
    CustomerUpdateModel *shared.CustomerUpdateModel `request:"mediaType=application/*+json"`
    CustomerUpdateModel1 *shared.CustomerUpdateModel `request:"mediaType=application/json"`
    CustomerUpdateModel2 *shared.CustomerUpdateModel `request:"mediaType=application/json-patch+json"`
    CustomerUpdateModel3 *shared.CustomerUpdateModel `request:"mediaType=text/json"`
    
}

type PutConsumerV1CustomersIDRequest struct {
    PathParams PutConsumerV1CustomersIDPathParams 
    Request *PutConsumerV1CustomersIDRequests 
    
}

type PutConsumerV1CustomersIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

