package operations

import (
"openapi/pkg/models/shared")

type GetTaxesJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetTaxesJSONRequest struct {
    QueryParams GetTaxesJSONQueryParams 
    
}

type GetTaxesJSONResponse struct {
    ContentType string 
    StatusCode int64 
    Taxes []shared.Tax 
    
}

