package operations

import (
"openapi/pkg/models/shared")

type WellsReadPathParams struct {
    WellTagNumber int64 `pathParam:"style=simple,explode=false,name=well_tag_number"`
    
}

type WellsReadRequest struct {
    PathParams WellsReadPathParams 
    
}

type WellsReadResponse struct {
    ContentType string 
    StatusCode int64 
    WellDetail *shared.WellDetail 
    
}

