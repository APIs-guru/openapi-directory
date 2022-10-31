package operations

import (
"openapi/pkg/models/shared")

type GetCustomersIDFieldsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCustomersIDFieldsQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCustomersIDFieldsRequest struct {
    PathParams GetCustomersIDFieldsPathParams 
    QueryParams GetCustomersIDFieldsQueryParams 
    
}

type GetCustomersIDFieldsResponse struct {
    ContentType string 
    CustomerAdditionalFields []shared.CustomerAdditionalField 
    NotFound *interface{} 
    StatusCode int64 
    
}

