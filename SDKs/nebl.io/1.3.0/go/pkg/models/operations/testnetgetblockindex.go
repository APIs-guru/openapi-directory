package operations

import (
"openapi/pkg/models/shared")

type TestnetGetBlockIndexPathParams struct {
    Blockindex float64 `pathParam:"style=simple,explode=false,name=blockindex"`
    
}

type TestnetGetBlockIndexRequest struct {
    PathParams TestnetGetBlockIndexPathParams 
    
}

type TestnetGetBlockIndexResponse struct {
    ContentType string 
    StatusCode int64 
    GetBlockIndexResponse *shared.GetBlockIndexResponse 
    
}

