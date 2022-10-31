package operations

import (
"openapi/pkg/models/shared")

type DcimVirtualChassisReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimVirtualChassisReadRequest struct {
    PathParams DcimVirtualChassisReadPathParams 
    
}

type DcimVirtualChassisReadResponse struct {
    ContentType string 
    StatusCode int64 
    VirtualChassis *shared.VirtualChassis 
    
}

