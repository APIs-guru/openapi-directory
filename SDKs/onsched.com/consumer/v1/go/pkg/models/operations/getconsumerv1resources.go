package operations



type GetConsumerV1ResourcesQueryParams struct {
    Email *string `queryParam:"style=form,explode=true,name=email"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    ResourceGroupID *int32 `queryParam:"style=form,explode=true,name=resourceGroupId"`
    SortOrder *string `queryParam:"style=form,explode=true,name=sortOrder"`
    
}

type GetConsumerV1ResourcesRequest struct {
    QueryParams GetConsumerV1ResourcesQueryParams 
    
}

type GetConsumerV1ResourcesResponse struct {
    ContentType string 
    ResourceListViewModel map[string]interface{} 
    StatusCode int64 
    
}

