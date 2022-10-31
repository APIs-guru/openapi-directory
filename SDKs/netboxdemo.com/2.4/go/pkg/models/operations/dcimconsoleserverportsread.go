package operations

import (
"openapi/pkg/models/shared")

type DcimConsoleServerPortsReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimConsoleServerPortsReadRequest struct {
    PathParams DcimConsoleServerPortsReadPathParams 
    
}

type DcimConsoleServerPortsReadResponse struct {
    ConsoleServerPort *shared.ConsoleServerPort 
    ContentType string 
    StatusCode int64 
    
}

