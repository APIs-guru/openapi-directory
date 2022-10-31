package operations



type DeletePagesIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeletePagesIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeletePagesIDJSONRequest struct {
    PathParams DeletePagesIDJSONPathParams 
    QueryParams DeletePagesIDJSONQueryParams 
    
}

type DeletePagesIDJSONResponse struct {
    ContentType string 
    DeletePagesIDJSON200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

