package operations



type GetOrderPathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetOrderRequest struct {
    PathParams GetOrderPathParams 
    
}

type GetOrderResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    OrderDetailWithIndicatorVo *interface{} 
    StatusCode int64 
    
}

