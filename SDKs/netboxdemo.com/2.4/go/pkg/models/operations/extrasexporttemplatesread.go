package operations

import (
"openapi/pkg/models/shared")

type ExtrasExportTemplatesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasExportTemplatesReadRequest struct {
    PathParams ExtrasExportTemplatesReadPathParams 
    
}

type ExtrasExportTemplatesReadResponse struct {
    ContentType string 
    ExportTemplate *shared.ExportTemplate 
    StatusCode int64 
    
}

