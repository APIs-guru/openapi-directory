package operations

import (
"openapi/pkg/models/shared")

type DeleteKvPairPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteKvPairRequest struct {
    PathParams DeleteKvPairPathParams 
    
}

type DeleteKvPairResponse struct {
    ContentType string 
    ResponseDefaultResource *shared.ResponseDefaultResource 
    StatusCode int64 
    
}

