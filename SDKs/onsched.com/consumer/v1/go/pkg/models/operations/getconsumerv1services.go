package operations



type GetConsumerV1ServicesQueryParams struct {
    AllLocations *bool `queryParam:"style=form,explode=true,name=allLocations"`
    DefaultService *bool `queryParam:"style=form,explode=true,name=defaultService"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Scope *int32 `queryParam:"style=form,explode=true,name=scope"`
    ServiceGroupID *int32 `queryParam:"style=form,explode=true,name=serviceGroupId"`
    ServiceID *string `queryParam:"style=form,explode=true,name=serviceId"`
    SortDescending *bool `queryParam:"style=form,explode=true,name=sortDescending"`
    SortOrder *int32 `queryParam:"style=form,explode=true,name=sortOrder"`
    
}

type GetConsumerV1ServicesRequest struct {
    QueryParams GetConsumerV1ServicesQueryParams 
    
}

type GetConsumerV1ServicesResponse struct {
    ContentType string 
    ServiceListViewModel map[string]interface{} 
    StatusCode int64 
    
}

