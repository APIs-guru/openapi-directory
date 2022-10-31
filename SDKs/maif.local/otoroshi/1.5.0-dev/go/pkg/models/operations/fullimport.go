package operations

import (
"openapi/pkg/models/shared")

type FullImportSecurity struct {
    OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
    
}

type FullImportRequest struct {
    Request *shared.ImportExport `request:"mediaType=application/json"`
    Security FullImportSecurity 
    
}

type FullImportResponse struct {
    ContentType string 
    Done *shared.Done 
    StatusCode int64 
    
}

