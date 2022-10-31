package operations

import (
"openapi/pkg/models/shared")

type GetCustomFieldsIDSelectOptionsJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCustomFieldsIDSelectOptionsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCustomFieldsIDSelectOptionsJSONRequest struct {
    PathParams GetCustomFieldsIDSelectOptionsJSONPathParams 
    QueryParams GetCustomFieldsIDSelectOptionsJSONQueryParams 
    
}

type GetCustomFieldsIDSelectOptionsJSONResponse struct {
    ContentType string 
    CustomFieldSelectOptions []shared.CustomFieldSelectOption 
    StatusCode int64 
    
}

