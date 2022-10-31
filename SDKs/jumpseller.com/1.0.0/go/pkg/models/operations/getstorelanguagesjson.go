package operations



type GetStoreLanguagesJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetStoreLanguagesJSONRequest struct {
    QueryParams GetStoreLanguagesJSONQueryParams 
    
}

type GetStoreLanguagesJSONResponse struct {
    ContentType string 
    Languages []interface{} 
    StatusCode int64 
    
}

