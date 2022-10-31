package operations

import (
"openapi/pkg/models/shared")

type PutCategoriesIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutCategoriesIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PutCategoriesIDJSONRequest struct {
    PathParams PutCategoriesIDJSONPathParams 
    QueryParams PutCategoriesIDJSONQueryParams 
    Request shared.CategoryEdit `request:"mediaType=application/json"`
    
}

type PutCategoriesIDJSONResponse struct {
    Category *shared.Category 
    ContentType string 
    NotFound *interface{} 
    StatusCode int64 
    
}

