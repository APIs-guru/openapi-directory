package operations



type GetProductsIDOptionsOptionIDValuesCountJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    OptionID int32 `pathParam:"style=simple,explode=false,name=option_id"`
    
}

type GetProductsIDOptionsOptionIDValuesCountJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDOptionsOptionIDValuesCountJSONRequest struct {
    PathParams GetProductsIDOptionsOptionIDValuesCountJSONPathParams 
    QueryParams GetProductsIDOptionsOptionIDValuesCountJSONQueryParams 
    
}

type GetProductsIDOptionsOptionIDValuesCountJSONResponse struct {
    ContentType string 
    Count *interface{} 
    NotFound *interface{} 
    StatusCode int64 
    
}

