package operations

import (
"openapi/pkg/models/shared")

type DcimConsolePortsTracePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimConsolePortsTraceRequest struct {
    PathParams DcimConsolePortsTracePathParams 
    
}

type DcimConsolePortsTraceResponse struct {
    ConsolePort *shared.ConsolePort 
    ContentType string 
    StatusCode int64 
    
}

