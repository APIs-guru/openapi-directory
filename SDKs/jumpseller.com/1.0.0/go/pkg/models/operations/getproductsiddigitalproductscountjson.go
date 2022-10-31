package operations



type GetProductsIDDigitalProductsCountJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProductsIDDigitalProductsCountJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDDigitalProductsCountJSONRequest struct {
    PathParams GetProductsIDDigitalProductsCountJSONPathParams 
    QueryParams GetProductsIDDigitalProductsCountJSONQueryParams 
    
}

type GetProductsIDDigitalProductsCountJSONResponse struct {
    ContentType string 
    Count *interface{} 
    NotFound *interface{} 
    StatusCode int64 
    
}

