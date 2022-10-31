package operations

import (
"openapi/pkg/models/shared")

type IpamAggregatesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamAggregatesReadRequest struct {
    PathParams IpamAggregatesReadPathParams 
    
}

type IpamAggregatesReadResponse struct {
    Aggregate *shared.Aggregate 
    ContentType string 
    StatusCode int64 
    
}

