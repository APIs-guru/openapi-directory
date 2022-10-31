package operations

import (
"openapi/pkg/models/shared")

type DcimRacksReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRacksReadRequest struct {
    PathParams DcimRacksReadPathParams 
    
}

type DcimRacksReadResponse struct {
    ContentType string 
    Rack *shared.Rack 
    StatusCode int64 
    
}

