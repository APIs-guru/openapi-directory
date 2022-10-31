package operations

import (
"openapi/pkg/models/shared")

type DcimFrontPortsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimFrontPortsReadRequest struct {
    PathParams DcimFrontPortsReadPathParams 
    
}

type DcimFrontPortsReadResponse struct {
    ContentType string 
    FrontPort *shared.FrontPort 
    StatusCode int64 
    
}

