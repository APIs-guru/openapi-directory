package operations



type GetQueriesIDQueryPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetQueriesIDQueryQueryParams struct {
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
    
}

type GetQueriesIDQueryRequest struct {
    PathParams GetQueriesIDQueryPathParams 
    QueryParams GetQueriesIDQueryQueryParams 
    
}

type GetQueriesIDQueryResponse struct {
    ContentType string 
    GetQueriesIDQuery200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

