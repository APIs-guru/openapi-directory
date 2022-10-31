package operations



type DeleteCustomersIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteCustomersIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteCustomersIDJSONRequest struct {
    PathParams DeleteCustomersIDJSONPathParams 
    QueryParams DeleteCustomersIDJSONQueryParams 
    
}

type DeleteCustomersIDJSONResponse struct {
    ContentType string 
    DeleteCustomersIDJSON200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

