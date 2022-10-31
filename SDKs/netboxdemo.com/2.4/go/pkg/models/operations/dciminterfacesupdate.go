package operations

import (
"openapi/pkg/models/shared")

type DcimInterfacesUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimInterfacesUpdateRequest struct {
    PathParams DcimInterfacesUpdatePathParams 
    Request shared.WritableInterface `request:"mediaType=application/json"`
    
}

type DcimInterfacesUpdateResponse struct {
    ContentType string 
    Interface *shared.Interface 
    StatusCode int64 
    
}

