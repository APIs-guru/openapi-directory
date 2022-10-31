package operations

import (
"openapi/pkg/models/shared")

type DcimRackRolesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimRackRolesReadRequest struct {
    PathParams DcimRackRolesReadPathParams 
    
}

type DcimRackRolesReadResponse struct {
    ContentType string 
    RackRole *shared.RackRole 
    StatusCode int64 
    
}

