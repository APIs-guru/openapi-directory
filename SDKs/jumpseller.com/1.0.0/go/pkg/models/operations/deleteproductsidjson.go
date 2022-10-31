package operations



type DeleteProductsIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteProductsIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteProductsIDJSONRequest struct {
    PathParams DeleteProductsIDJSONPathParams 
    QueryParams DeleteProductsIDJSONQueryParams 
    
}

type DeleteProductsIDJSONResponse struct {
    ContentType string 
    DeleteProductsIDJSON200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

