package operations

import (
"openapi/pkg/models/shared")

type GetCustomFieldsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCustomFieldsJSONRequest struct {
    QueryParams GetCustomFieldsJSONQueryParams 
    
}

type GetCustomFieldsJSONResponse struct {
    ContentType string 
    CustomFields []shared.CustomField 
    StatusCode int64 
    
}

