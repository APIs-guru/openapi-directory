package operations

import (
"openapi/pkg/models/shared")

type GetCategoriesJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCategoriesJSONRequest struct {
    QueryParams GetCategoriesJSONQueryParams 
    
}

type GetCategoriesJSONResponse struct {
    Category *shared.Category 
    ContentType string 
    StatusCode int64 
    
}

