package operations



type GetQueriesIDAnswersPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetQueriesIDAnswersQueryParams struct {
    Expand *string `queryParam:"style=form,explode=true,name=expand"`
    Short *bool `queryParam:"style=form,explode=true,name=short"`
    Simplify *bool `queryParam:"style=form,explode=true,name=simplify"`
    
}

type GetQueriesIDAnswersRequest struct {
    PathParams GetQueriesIDAnswersPathParams 
    QueryParams GetQueriesIDAnswersQueryParams 
    
}

type GetQueriesIDAnswersResponse struct {
    ContentType string 
    GetQueriesIDAnswers200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

