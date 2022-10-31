package operations



type GetRfqPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    RfqID string `pathParam:"style=simple,explode=false,name=rfq_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetRfqRequest struct {
    PathParams GetRfqPathParams 
    
}

type GetRfqResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    RfqExpandVo *interface{} 
    StatusCode int64 
    
}

