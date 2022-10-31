package operations

import (
"openapi/pkg/models/shared")

type PutCustomersIDJSONPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutCustomersIDJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type PutCustomersIDJSONRequest struct {
    PathParams PutCustomersIDJSONPathParams 
    QueryParams PutCustomersIDJSONQueryParams 
    Request shared.CustomerWithPasswordNoID `request:"mediaType=application/json"`
    
}

type PutCustomersIDJSONResponse struct {
    ContentType string 
    Customer *shared.Customer 
    NotFound *interface{} 
    StatusCode int64 
    
}

