package operations



type GetSellOrderOfWorkgroupPathParams struct {
    OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetSellOrderOfWorkgroupRequest struct {
    PathParams GetSellOrderOfWorkgroupPathParams 
    
}

type GetSellOrderOfWorkgroupResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    OrderExpandWorkgroupLevelVo *interface{} 
    StatusCode int64 
    
}

