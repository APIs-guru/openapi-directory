package operations

import (
"openapi/pkg/models/shared")

type UpdateANumberRequest struct {
    Request shared.NumberDetailsUpdate `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type UpdateANumberResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Response *shared.Response 
    Unauthorized *shared.Unauthorized 
    
}

