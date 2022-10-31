package operations



type GetProductsCategoryCategoryIDCountJSONPathParams struct {
    CategoryID int32 `pathParam:"style=simple,explode=false,name=category_id"`
    
}

type GetProductsCategoryCategoryIDCountJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetProductsCategoryCategoryIDCountJSONRequest struct {
    PathParams GetProductsCategoryCategoryIDCountJSONPathParams 
    QueryParams GetProductsCategoryCategoryIDCountJSONQueryParams 
    
}

type GetProductsCategoryCategoryIDCountJSONResponse struct {
    ContentType string 
    Count *interface{} 
    NotFound *interface{} 
    StatusCode int64 
    
}

