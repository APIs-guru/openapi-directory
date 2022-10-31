package operations



type GetBuyOrderListPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetBuyOrderListRequest struct {
    PathParams GetBuyOrderListPathParams 
    
}

type GetBuyOrderListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    OrderListVo *interface{} 
    StatusCode int64 
    
}

