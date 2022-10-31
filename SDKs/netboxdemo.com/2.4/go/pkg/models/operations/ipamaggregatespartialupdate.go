package operations

import (
"openapi/pkg/models/shared")

type IpamAggregatesPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamAggregatesPartialUpdateRequest struct {
    PathParams IpamAggregatesPartialUpdatePathParams 
    Request shared.WritableAggregate `request:"mediaType=application/json"`
    
}

type IpamAggregatesPartialUpdateResponse struct {
    Aggregate *shared.Aggregate 
    ContentType string 
    StatusCode int64 
    
}

