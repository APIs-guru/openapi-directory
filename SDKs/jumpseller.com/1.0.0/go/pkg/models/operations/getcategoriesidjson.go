package operations

import (
"openapi/pkg/models/shared")

type GetCategoriesIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCategoriesIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCategoriesIDJSONRequest struct {
    PathParams GetCategoriesIDJSONPathParams 
    QueryParams GetCategoriesIDJSONQueryParams 
    
}

type GetCategoriesIDJSONResponse struct {
    Category *shared.Category 
    ContentType string 
    NotFound *interface{} 
    StatusCode int64 
    
}

