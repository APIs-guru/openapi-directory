package operations

import (
"openapi/pkg/models/shared")

type DcimRackRolesCreateRequest struct {
    Request shared.RackRole `request:"mediaType=application/json"`
    
}

type DcimRackRolesCreateResponse struct {
    ContentType string 
    RackRole *shared.RackRole 
    StatusCode int64 
    
}

