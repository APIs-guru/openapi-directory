package operations



type GetOrdersCountJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetOrdersCountJSONRequest struct {
    QueryParams GetOrdersCountJSONQueryParams 
    
}

type GetOrdersCountJSONResponse struct {
    ContentType string 
    Count *interface{} 
    StatusCode int64 
    
}

