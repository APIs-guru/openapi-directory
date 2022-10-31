package operations



type GetConsumerV1ServicegroupsQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetConsumerV1ServicegroupsRequest struct {
    QueryParams GetConsumerV1ServicegroupsQueryParams 
    
}

type GetConsumerV1ServicegroupsResponse struct {
    ContentType string 
    ServiceGroupListViewModel map[string]interface{} 
    StatusCode int64 
    
}

