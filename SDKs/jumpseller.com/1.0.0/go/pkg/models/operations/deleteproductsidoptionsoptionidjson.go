package operations



type DeleteProductsIDOptionsOptionIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    OptionID int32 `pathParam:"style=simple,explode=false,name=option_id"`
    
}

type DeleteProductsIDOptionsOptionIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteProductsIDOptionsOptionIDJSONRequest struct {
    PathParams DeleteProductsIDOptionsOptionIDJSONPathParams 
    QueryParams DeleteProductsIDOptionsOptionIDJSONQueryParams 
    
}

type DeleteProductsIDOptionsOptionIDJSONResponse struct {
    ContentType string 
    DeleteProductsIDOptionsOptionIDJSON200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

