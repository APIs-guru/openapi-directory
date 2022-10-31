package operations



type GetProductsIDOptionsCountJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProductsIDOptionsCountJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDOptionsCountJSONRequest struct {
    PathParams GetProductsIDOptionsCountJSONPathParams 
    QueryParams GetProductsIDOptionsCountJSONQueryParams 
    
}

type GetProductsIDOptionsCountJSONResponse struct {
    ContentType string 
    Count *interface{} 
    NotFound *interface{} 
    StatusCode int64 
    
}

