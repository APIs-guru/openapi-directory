package operations

import (
"openapi/pkg/models/shared")

type DcimRackRolesUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRackRolesUpdateRequest struct {
    PathParams DcimRackRolesUpdatePathParams 
    Request shared.RackRole `request:"mediaType=application/json"`
    
}

type DcimRackRolesUpdateResponse struct {
    ContentType string 
    RackRole *shared.RackRole 
    StatusCode int64 
    
}

