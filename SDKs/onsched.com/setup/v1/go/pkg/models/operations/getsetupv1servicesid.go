package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1ServicesIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1ServicesIDRequest struct {
    PathParams GetSetupV1ServicesIDPathParams 
    
}

type GetSetupV1ServicesIDResponse struct {
    ContentType string 
    ServiceViewModel *shared.ServiceViewModel 
    StatusCode int64 
    
}

