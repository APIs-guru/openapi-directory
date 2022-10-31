package operations



type GetSellOrderListPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetSellOrderListRequest struct {
    PathParams GetSellOrderListPathParams 
    
}

type GetSellOrderListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    OrderListVo *interface{} 
    StatusCode int64 
    
}

