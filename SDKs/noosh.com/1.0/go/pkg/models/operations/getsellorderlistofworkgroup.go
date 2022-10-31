package operations



type GetSellOrderListOfWorkgroupPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetSellOrderListOfWorkgroupRequest struct {
    PathParams GetSellOrderListOfWorkgroupPathParams 
    
}

type GetSellOrderListOfWorkgroupResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    OrderWorkgroupLevelListVo *interface{} 
    StatusCode int64 
    
}

