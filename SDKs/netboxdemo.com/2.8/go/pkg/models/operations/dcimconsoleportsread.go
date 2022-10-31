package operations

import (
"openapi/pkg/models/shared")

type DcimConsolePortsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimConsolePortsReadRequest struct {
    PathParams DcimConsolePortsReadPathParams 
    
}

type DcimConsolePortsReadResponse struct {
    ConsolePort *shared.ConsolePort 
    ContentType string 
    StatusCode int64 
    
}

