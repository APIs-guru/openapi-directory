package operations

import (
"openapi/pkg/models/shared")

type IpamRirsCreateRequest struct {
    Request shared.Rir `request:"mediaType=application/json"`
    
}

type IpamRirsCreateResponse struct {
    ContentType string 
    Rir *shared.Rir 
    StatusCode int64 
    
}

