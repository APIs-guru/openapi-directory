package operations

import (
"openapi/pkg/models/shared")

type DcimInterfacesCreateRequest struct {
    Request shared.WritableDeviceInterface `request:"mediaType=application/json"`
    
}

type DcimInterfacesCreateResponse struct {
    ContentType string 
    DeviceInterface *shared.DeviceInterface 
    StatusCode int64 
    
}

