package operations

import (
"openapi/pkg/models/shared")

type PutCustomersIDFieldsFieldIDPathParams struct {
    FieldID int32 `pathParam:"style=simple,explode=false,name=field_id"`
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutCustomersIDFieldsFieldIDQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PutCustomersIDFieldsFieldIDRequest struct {
    PathParams PutCustomersIDFieldsFieldIDPathParams 
    QueryParams PutCustomersIDFieldsFieldIDQueryParams 
    Request shared.CustomerAdditionalFieldEdit `request:"mediaType=application/json"`
    
}

type PutCustomersIDFieldsFieldIDResponse struct {
    BadParams *interface{} 
    ContentType string 
    CustomerAdditionalField *shared.CustomerAdditionalField 
    NotFound *interface{} 
    StatusCode int64 
    
}

