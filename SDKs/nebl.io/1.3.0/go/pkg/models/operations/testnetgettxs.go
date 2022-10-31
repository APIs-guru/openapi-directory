package operations

import (
"openapi/pkg/models/shared")

type TestnetGetTxsQueryParams struct {
    Address *string `queryParam:"style=form,explode=true,name=address"`
    Block *string `queryParam:"style=form,explode=true,name=block"`
    PageNum *float64 `queryParam:"style=form,explode=true,name=pageNum"`
    
}

type TestnetGetTxsRequest struct {
    QueryParams TestnetGetTxsQueryParams 
    
}

type TestnetGetTxsResponse struct {
    ContentType string 
    StatusCode int64 
    GetTxsResponse *shared.GetTxsResponse 
    
}

