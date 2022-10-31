package operations

import (
"openapi/pkg/models/shared")

type GetBlockIndexPathParams struct {
    Blockindex float64 `pathParam:"style=simple,explode=false,name=blockindex"`
    
}

type GetBlockIndexRequest struct {
    PathParams GetBlockIndexPathParams 
    
}

type GetBlockIndexResponse struct {
    ContentType string 
    StatusCode int64 
    GetBlockIndexResponse *shared.GetBlockIndexResponse 
    
}

