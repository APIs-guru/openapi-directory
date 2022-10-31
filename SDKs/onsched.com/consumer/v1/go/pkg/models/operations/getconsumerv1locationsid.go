package operations

import (
"openapi/pkg/models/shared")

type GetConsumerV1LocationsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetConsumerV1LocationsIDRequest struct {
    PathParams GetConsumerV1LocationsIDPathParams 
    
}

type GetConsumerV1LocationsIDResponse struct {
    ContentType string 
    LocationViewModel *shared.LocationViewModel 
    StatusCode int64 
    
}

