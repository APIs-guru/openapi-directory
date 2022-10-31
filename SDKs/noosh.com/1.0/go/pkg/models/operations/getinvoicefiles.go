package operations



type GetInvoiceFilesPathParams struct {
    InvoiceID string `pathParam:"style=simple,explode=false,name=invoice_id"`
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetInvoiceFilesRequest struct {
    PathParams GetInvoiceFilesPathParams 
    
}

type GetInvoiceFilesResponse struct {
    Body []byte 
    ContentType string 
    FileListResponseVo *interface{} 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    
}

