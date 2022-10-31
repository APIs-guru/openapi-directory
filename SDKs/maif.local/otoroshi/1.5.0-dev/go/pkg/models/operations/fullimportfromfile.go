package operations

import (
"openapi/pkg/models/shared")

type FullImportFromFileSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type FullImportFromFileRequest struct {
    Request *shared.ImportExport `request:"mediaType=application/json"`
    Security FullImportFromFileSecurity 
    
}

type FullImportFromFileResponse struct {
    ContentType string 
    Done *shared.Done 
    StatusCode int64 
    
}

