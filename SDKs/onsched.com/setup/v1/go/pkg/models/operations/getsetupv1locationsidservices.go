package operations



type GetSetupV1LocationsIDServicesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1LocationsIDServicesQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type GetSetupV1LocationsIDServicesRequest struct {
    PathParams GetSetupV1LocationsIDServicesPathParams 
    QueryParams GetSetupV1LocationsIDServicesQueryParams 
    
}

type GetSetupV1LocationsIDServicesResponse struct {
    BusinessServiceListViewModel map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

