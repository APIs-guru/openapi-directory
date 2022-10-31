package operations



type DeleteProductsIDOptionsOptionIDValuesValueIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    OptionID int32 `pathParam:"style=simple,explode=false,name=option_id"`
    ValueID int32 `pathParam:"style=simple,explode=false,name=value_id"`
    
}

type DeleteProductsIDOptionsOptionIDValuesValueIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteProductsIDOptionsOptionIDValuesValueIDJSONRequest struct {
    PathParams DeleteProductsIDOptionsOptionIDValuesValueIDJSONPathParams 
    QueryParams DeleteProductsIDOptionsOptionIDValuesValueIDJSONQueryParams 
    
}

type DeleteProductsIDOptionsOptionIDValuesValueIDJSONResponse struct {
    ContentType string 
    DeleteProductsIDOptionsOptionIDValuesValueIDJSON200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

