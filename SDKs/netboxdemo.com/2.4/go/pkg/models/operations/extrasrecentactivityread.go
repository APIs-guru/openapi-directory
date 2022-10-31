package operations

import (
"openapi/pkg/models/shared")

type ExtrasRecentActivityReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasRecentActivityReadRequest struct {
    PathParams ExtrasRecentActivityReadPathParams 
    
}

type ExtrasRecentActivityReadResponse struct {
    ContentType string 
    StatusCode int64 
    UserAction *shared.UserAction 
    
}

