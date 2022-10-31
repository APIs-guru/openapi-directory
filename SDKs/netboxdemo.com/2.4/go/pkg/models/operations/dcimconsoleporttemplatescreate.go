package operations

import (
"openapi/pkg/models/shared")

type DcimConsolePortTemplatesCreateRequest struct {
    Request shared.WritableConsolePortTemplate `request:"mediaType=application/json"`
    
}

type DcimConsolePortTemplatesCreateResponse struct {
    ConsolePortTemplate *shared.ConsolePortTemplate 
    ContentType string 
    StatusCode int64 
    
}

