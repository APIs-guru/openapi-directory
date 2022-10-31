package operations

import (
"openapi/pkg/models/shared")

type DcimDeviceBaysReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimDeviceBaysReadRequest struct {
    PathParams DcimDeviceBaysReadPathParams 
    
}

type DcimDeviceBaysReadResponse struct {
    ContentType string 
    DeviceBay *shared.DeviceBay 
    StatusCode int64 
    
}

