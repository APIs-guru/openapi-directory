package operations

import (
"openapi/pkg/models/shared")

type PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams struct {
    CustomFieldSelectOptionID int32 `pathParam:"style=simple,explode=false,name=custom_field_select_option_id"`
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest struct {
    PathParams PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams 
    QueryParams PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams 
    Request shared.CustomFieldSelectOptionEdit `request:"mediaType=application/json"`
    
}

type PutCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse struct {
    ContentType string 
    CustomFieldSelectOption *shared.CustomFieldSelectOption 
    NotFound *interface{} 
    StatusCode int64 
    
}

