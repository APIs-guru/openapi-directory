package operations



type GetInvoicePathParams struct {
    InvoiceID string `pathParam:"style=simple,explode=false,name=invoice_id"`
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetInvoiceRequest struct {
    PathParams GetInvoicePathParams 
    
}

type GetInvoiceResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    InvoiceExpandVo *interface{} 
    StatusCode int64 
    
}

