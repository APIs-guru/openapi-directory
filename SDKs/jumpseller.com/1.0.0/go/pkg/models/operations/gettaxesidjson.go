package operations

import (
"openapi/pkg/models/shared")

type GetTaxesIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetTaxesIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetTaxesIDJSONRequest struct {
    PathParams GetTaxesIDJSONPathParams 
    QueryParams GetTaxesIDJSONQueryParams 
    
}

type GetTaxesIDJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    StatusCode int64 
    Tax *shared.Tax 
    
}

