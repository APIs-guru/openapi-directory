package operations



type DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams struct {
    CustomFieldSelectOptionID int32 `pathParam:"style=simple,explode=false,name=custom_field_select_option_id"`
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONRequest struct {
    PathParams DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONPathParams 
    QueryParams DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONQueryParams 
    
}

type DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSONResponse struct {
    ContentType string 
    DeleteCustomFieldsIDSelectOptionsCustomFieldSelectOptionIDJSON200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

