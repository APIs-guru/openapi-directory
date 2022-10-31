package operations

import (
"openapi/pkg/models/shared")

type BuyANumberRequest struct {
    Request shared.NumberDetails `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type BuyANumberResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Response *shared.Response 
    Response420 *shared.Response420 
    Unauthorized *shared.Unauthorized 
    
}

