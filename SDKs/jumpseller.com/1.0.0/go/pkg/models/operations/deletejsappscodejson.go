package operations



type DeleteJsappsCodeJSONPathParams struct {
    Code string `pathParam:"style=simple,explode=false,name=code"`
    
}

type DeleteJsappsCodeJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteJsappsCodeJSONRequest struct {
    PathParams DeleteJsappsCodeJSONPathParams 
    QueryParams DeleteJsappsCodeJSONQueryParams 
    
}

type DeleteJsappsCodeJSONResponse struct {
    ContentType string 
    DeleteJsappsCodeJSON200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

