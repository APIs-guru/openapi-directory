package operations



type GetConsumerV1ResourcesIDServicesPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetConsumerV1ResourcesIDServicesQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetConsumerV1ResourcesIDServicesRequest struct {
    PathParams GetConsumerV1ResourcesIDServicesPathParams 
    QueryParams GetConsumerV1ResourcesIDServicesQueryParams 
    
}

type GetConsumerV1ResourcesIDServicesResponse struct {
    ContentType string 
    ResourceServiceListViewModel map[string]interface{} 
    StatusCode int64 
    
}

