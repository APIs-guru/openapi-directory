package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1BusinessusersIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1BusinessusersIDRequest struct {
    PathParams GetSetupV1BusinessusersIDPathParams 
    
}

type GetSetupV1BusinessusersIDResponse struct {
    BusinessUserViewModel *shared.BusinessUserViewModel 
    ContentType string 
    StatusCode int64 
    
}

