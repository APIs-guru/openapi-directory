package operations



type ExtrasExportTemplatesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasExportTemplatesDeleteRequest struct {
    PathParams ExtrasExportTemplatesDeletePathParams 
    
}

type ExtrasExportTemplatesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

