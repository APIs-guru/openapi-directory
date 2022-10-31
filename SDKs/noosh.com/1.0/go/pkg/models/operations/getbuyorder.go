package operations



type GetBuyOrderPathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetBuyOrderRequest struct {
    PathParams GetBuyOrderPathParams 
    
}

type GetBuyOrderResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    OrderDetailVo *interface{} 
    StatusCode int64 
    
}

