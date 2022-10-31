package operations

import (
"openapi/pkg/models/shared")

type DcimManufacturersPartialUpdatePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimManufacturersPartialUpdateRequest struct {
    PathParams DcimManufacturersPartialUpdatePathParams 
    Request shared.Manufacturer `request:"mediaType=application/json"`
    
}

type DcimManufacturersPartialUpdateResponse struct {
    ContentType string 
    Manufacturer *shared.Manufacturer 
    StatusCode int64 
    
}

