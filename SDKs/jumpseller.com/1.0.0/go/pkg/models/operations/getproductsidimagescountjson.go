package operations



type GetProductsIDImagesCountJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProductsIDImagesCountJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsIDImagesCountJSONRequest struct {
    PathParams GetProductsIDImagesCountJSONPathParams 
    QueryParams GetProductsIDImagesCountJSONQueryParams 
    
}

type GetProductsIDImagesCountJSONResponse struct {
    ContentType string 
    Count *interface{} 
    NotFound *interface{} 
    StatusCode int64 
    
}

