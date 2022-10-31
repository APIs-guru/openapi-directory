package operations

import (
"openapi/pkg/models/shared")

type DcimDevicesCreateRequest struct {
    Request shared.WritableDevice `request:"mediaType=application/json"`
    
}

type DcimDevicesCreateResponse struct {
    ContentType string 
    Device *shared.Device 
    StatusCode int64 
    
}

