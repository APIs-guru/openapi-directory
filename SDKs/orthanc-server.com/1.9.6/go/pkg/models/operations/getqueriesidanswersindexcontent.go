package operations



type GetQueriesIDAnswersIndexContentPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Index string `pathParam:"style=simple,explode=false,name=index"`
    
}

type GetQueriesIDAnswersIndexContentQueryParams struct {
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
    
}

type GetQueriesIDAnswersIndexContentRequest struct {
    PathParams GetQueriesIDAnswersIndexContentPathParams 
    QueryParams GetQueriesIDAnswersIndexContentQueryParams 
    
}

type GetQueriesIDAnswersIndexContentResponse struct {
    ContentType string 
    GetQueriesIDAnswersIndexContent200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

