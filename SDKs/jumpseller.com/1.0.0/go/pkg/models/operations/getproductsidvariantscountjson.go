package operations



type GetProductsIDVariantsCountJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProductsIDVariantsCountJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDVariantsCountJSONRequest struct {
    PathParams GetProductsIDVariantsCountJSONPathParams 
    QueryParams GetProductsIDVariantsCountJSONQueryParams 
    
}

type GetProductsIDVariantsCountJSONResponse struct {
    ContentType string 
    Count *interface{} 
    NotFound *interface{} 
    StatusCode int64 
    
}

