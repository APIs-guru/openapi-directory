package operations

import (
"openapi/pkg/models/shared")

type DcimConsolePortTemplatesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimConsolePortTemplatesReadRequest struct {
    PathParams DcimConsolePortTemplatesReadPathParams 
    
}

type DcimConsolePortTemplatesReadResponse struct {
    ConsolePortTemplate *shared.ConsolePortTemplate 
    ContentType string 
    StatusCode int64 
    
}

