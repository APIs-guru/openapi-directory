package operations



type DeleteHooksIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteHooksIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteHooksIDJSONRequest struct {
    PathParams DeleteHooksIDJSONPathParams 
    QueryParams DeleteHooksIDJSONQueryParams 
    
}

type DeleteHooksIDJSONResponse struct {
    ContentType string 
    DeleteHooksIDJSON200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

