package operations

import (
"openapi/pkg/models/shared")

type DcimConsoleServerPortTemplatesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimConsoleServerPortTemplatesReadRequest struct {
    PathParams DcimConsoleServerPortTemplatesReadPathParams 
    
}

type DcimConsoleServerPortTemplatesReadResponse struct {
    ConsoleServerPortTemplate *shared.ConsoleServerPortTemplate 
    ContentType string 
    StatusCode int64 
    
}

