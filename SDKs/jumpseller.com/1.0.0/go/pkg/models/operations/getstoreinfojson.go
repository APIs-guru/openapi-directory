package operations

import (
"openapi/pkg/models/shared")

type GetStoreInfoJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetStoreInfoJSONRequest struct {
    QueryParams GetStoreInfoJSONQueryParams 
    
}

type GetStoreInfoJSONResponse struct {
    ContentType string 
    StatusCode int64 
    Store *shared.Store 
    
}

