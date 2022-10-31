package operations

import (
"openapi/pkg/models/shared")

type ExtrasObjectChangesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasObjectChangesReadRequest struct {
    PathParams ExtrasObjectChangesReadPathParams 
    
}

type ExtrasObjectChangesReadResponse struct {
    ContentType string 
    ObjectChange *shared.ObjectChange 
    StatusCode int64 
    
}

