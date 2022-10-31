package operations



type GetInvoicesPathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetInvoicesRequest struct {
    PathParams GetInvoicesPathParams 
    
}

type GetInvoicesResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    InvoiceDetailListExpandVo *interface{} 
    StatusCode int64 
    
}

