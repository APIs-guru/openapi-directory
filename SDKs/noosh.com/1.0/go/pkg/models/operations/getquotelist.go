package operations



type GetQuoteListPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetQuoteListQueryParams struct {
    QuoteStateIDUseFiltersEqualQuoteStateID111111 *string `queryParam:"style=form,explode=true,name=quote_state_id, use filters={"quote_state_id":111111}"`
    
}

type GetQuoteListRequest struct {
    PathParams GetQuoteListPathParams 
    QueryParams GetQuoteListQueryParams 
    
}

type GetQuoteListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    QuoteListVo *interface{} 
    StatusCode int64 
    
}

