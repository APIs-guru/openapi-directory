package operations



type GetReceivedTimeCardPathParams struct {
    TimeCardID string `pathParam:"style=simple,explode=false,name=timeCard_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetReceivedTimeCardRequest struct {
    PathParams GetReceivedTimeCardPathParams 
    
}

type GetReceivedTimeCardResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    TimeCardReceivedDetailVo *interface{} 
    
}

