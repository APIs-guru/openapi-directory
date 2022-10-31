package operations

import (
"openapi/pkg/models/shared")

type DcimCablesPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimCablesPartialUpdateRequest struct {
    PathParams DcimCablesPartialUpdatePathParams 
    Request shared.WritableCable `request:"mediaType=application/json"`
    
}

type DcimCablesPartialUpdateResponse struct {
    Cable *shared.Cable 
    ContentType string 
    StatusCode int64 
    
}

