package operations

import (
"openapi/pkg/models/shared")

type DcimManufacturersReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimManufacturersReadRequest struct {
    PathParams DcimManufacturersReadPathParams 
    
}

type DcimManufacturersReadResponse struct {
    ContentType string 
    Manufacturer *shared.Manufacturer 
    StatusCode int64 
    
}

