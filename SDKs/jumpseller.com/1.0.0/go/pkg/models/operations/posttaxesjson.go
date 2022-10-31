package operations

import (
"openapi/pkg/models/shared")

type PostTaxesJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PostTaxesJSONRequest struct {
    QueryParams PostTaxesJSONQueryParams 
    Request shared.TaxEdit `request:"mediaType=application/json"`
    
}

type PostTaxesJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    StatusCode int64 
    Tax *shared.Tax 
    
}

