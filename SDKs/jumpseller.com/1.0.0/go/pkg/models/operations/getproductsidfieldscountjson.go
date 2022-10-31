package operations



type GetProductsIDFieldsCountJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProductsIDFieldsCountJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDFieldsCountJSONRequest struct {
    PathParams GetProductsIDFieldsCountJSONPathParams 
    QueryParams GetProductsIDFieldsCountJSONQueryParams 
    
}

type GetProductsIDFieldsCountJSONResponse struct {
    ContentType string 
    Count *interface{} 
    NotFound *interface{} 
    StatusCode int64 
    
}

