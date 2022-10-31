package operations

import (
"openapi/pkg/models/shared")

type DcimConsoleServerPortsUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimConsoleServerPortsUpdateRequest struct {
    PathParams DcimConsoleServerPortsUpdatePathParams 
    Request shared.WritableConsoleServerPort `request:"mediaType=application/json"`
    
}

type DcimConsoleServerPortsUpdateResponse struct {
    ConsoleServerPort *shared.ConsoleServerPort 
    ContentType string 
    StatusCode int64 
    
}

