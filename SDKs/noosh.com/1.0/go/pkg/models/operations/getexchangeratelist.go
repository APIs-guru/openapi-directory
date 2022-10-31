package operations



type GetExchangeRateListPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetExchangeRateListRequest struct {
    PathParams GetExchangeRateListPathParams 
    
}

type GetExchangeRateListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    MultiExchangeRateListVo *interface{} 
    StatusCode int64 
    
}

