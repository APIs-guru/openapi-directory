package operations



type DeleteProductsProductIDFieldsFieldIDJSONPathParams struct {
    FieldID int32 `pathParam:"style=simple,explode=false,name=field_id"`
    ProductID int32 `pathParam:"style=simple,explode=false,name=product_id"`
    
}

type DeleteProductsProductIDFieldsFieldIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteProductsProductIDFieldsFieldIDJSONRequest struct {
    PathParams DeleteProductsProductIDFieldsFieldIDJSONPathParams 
    QueryParams DeleteProductsProductIDFieldsFieldIDJSONQueryParams 
    
}

type DeleteProductsProductIDFieldsFieldIDJSONResponse struct {
    ContentType string 
    MessageObject *interface{} 
    NotFound *interface{} 
    StatusCode int64 
    
}

