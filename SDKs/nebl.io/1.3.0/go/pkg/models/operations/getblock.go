package operations

import (
"openapi/pkg/models/shared")

type GetBlockPathParams struct {
    Blockhash string `pathParam:"style=simple,explode=false,name=blockhash"`
    
}

type GetBlockRequest struct {
    PathParams GetBlockPathParams 
    
}

type GetBlockResponse struct {
    ContentType string 
    StatusCode int64 
    GetBlockResponse *shared.GetBlockResponse 
    
}

