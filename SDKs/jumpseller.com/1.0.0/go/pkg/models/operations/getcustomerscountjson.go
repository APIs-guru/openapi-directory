package operations



type GetCustomersCountJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCustomersCountJSONRequest struct {
    QueryParams GetCustomersCountJSONQueryParams 
    
}

type GetCustomersCountJSONResponse struct {
    ContentType string 
    Count *interface{} 
    StatusCode int64 
    
}

