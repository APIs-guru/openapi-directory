package operations



type GetResourcesJSONQueryParams struct {
    Q string `queryParam:"style=form,explode=false,name=q"`
    
}

type GetResourcesJSONRequest struct {
    QueryParams GetResourcesJSONQueryParams 
    
}

type GetResourcesJSONResponse struct {
    ContentType string 
    ResourceWrappeds []interface{} 
    StatusCode int64 
    
}

