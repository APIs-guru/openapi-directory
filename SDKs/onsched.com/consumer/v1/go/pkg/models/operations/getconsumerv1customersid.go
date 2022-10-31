package operations

import (
"openapi/pkg/models/shared")

type GetConsumerV1CustomersIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetConsumerV1CustomersIDRequest struct {
    PathParams GetConsumerV1CustomersIDPathParams 
    
}

type GetConsumerV1CustomersIDResponse struct {
    ContentType string 
    CustomerViewModel *shared.CustomerViewModel 
    StatusCode int64 
    
}

