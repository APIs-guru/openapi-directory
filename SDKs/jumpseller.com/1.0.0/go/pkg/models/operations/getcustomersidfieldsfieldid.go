package operations

import (
"openapi/pkg/models/shared")

type GetCustomersIDFieldsFieldIDPathParams struct {
    FieldID int32 `pathParam:"style=simple,explode=false,name=field_id"`
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCustomersIDFieldsFieldIDQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCustomersIDFieldsFieldIDRequest struct {
    PathParams GetCustomersIDFieldsFieldIDPathParams 
    QueryParams GetCustomersIDFieldsFieldIDQueryParams 
    
}

type GetCustomersIDFieldsFieldIDResponse struct {
    ContentType string 
    CustomerAdditionalField *shared.CustomerAdditionalField 
    NotFound *interface{} 
    StatusCode int64 
    
}

