package operations



type GetQuotePathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    QuoteID string `pathParam:"style=simple,explode=false,name=quote_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetQuoteRequest struct {
    PathParams GetQuotePathParams 
    
}

type GetQuoteResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    QuoteExpandVo *interface{} 
    StatusCode int64 
    
}

