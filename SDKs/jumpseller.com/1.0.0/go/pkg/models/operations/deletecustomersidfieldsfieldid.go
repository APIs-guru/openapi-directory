package operations



type DeleteCustomersIDFieldsFieldIDPathParams struct {
    FieldID int32 `pathParam:"style=simple,explode=false,name=field_id"`
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteCustomersIDFieldsFieldIDQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type DeleteCustomersIDFieldsFieldIDRequest struct {
    PathParams DeleteCustomersIDFieldsFieldIDPathParams 
    QueryParams DeleteCustomersIDFieldsFieldIDQueryParams 
    
}

type DeleteCustomersIDFieldsFieldIDResponse struct {
    ContentType string 
    DeleteCustomersIDFieldsFieldID200ApplicationJSONString *string 
    NotFound *interface{} 
    StatusCode int64 
    
}

