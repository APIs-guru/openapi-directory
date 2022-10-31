package operations



type GetV1WorkgroupsWorkgroupIDQuotesPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetV1WorkgroupsWorkgroupIDQuotesQueryParams struct {
    QuoteStateIDUseFiltersEqualQuoteStateID111111 *string `queryParam:"style=form,explode=true,name=quote_state_id, use filters={"quote_state_id":111111}"`
    
}

type GetV1WorkgroupsWorkgroupIDQuotesRequest struct {
    PathParams GetV1WorkgroupsWorkgroupIDQuotesPathParams 
    QueryParams GetV1WorkgroupsWorkgroupIDQuotesQueryParams 
    
}

type GetV1WorkgroupsWorkgroupIDQuotesResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    QuoteOfWgLevelSimpleVo *interface{} 
    StatusCode int64 
    
}

