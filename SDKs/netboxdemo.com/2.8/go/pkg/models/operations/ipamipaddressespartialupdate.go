package operations

import (
"openapi/pkg/models/shared")

type IpamIPAddressesPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type IpamIPAddressesPartialUpdateRequest struct {
    PathParams IpamIPAddressesPartialUpdatePathParams 
    Request shared.WritableIPAddress `request:"mediaType=application/json"`
    
}

type IpamIPAddressesPartialUpdateResponse struct {
    ContentType string 
    IPAddress *shared.IPAddress 
    StatusCode int64 
    
}

