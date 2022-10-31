package operations



type GetConsumerV1LocationsQueryParams struct {
    IgnorePrimary *bool `queryParam:"style=form,explode=true,name=ignorePrimary"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    NearestTo *string `queryParam:"style=form,explode=true,name=nearestTo"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Proximity *int32 `queryParam:"style=form,explode=true,name=proximity"`
    RegionID *string `queryParam:"style=form,explode=true,name=regionId"`
    ServiceID *string `queryParam:"style=form,explode=true,name=serviceId"`
    Units *string `queryParam:"style=form,explode=true,name=units"`
    
}

type GetConsumerV1LocationsRequest struct {
    QueryParams GetConsumerV1LocationsQueryParams 
    
}

type GetConsumerV1LocationsResponse struct {
    ContentType string 
    LocationListViewModel map[string]interface{} 
    StatusCode int64 
    
}

