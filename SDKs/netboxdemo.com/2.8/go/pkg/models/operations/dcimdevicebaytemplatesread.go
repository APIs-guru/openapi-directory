package operations

import (
"openapi/pkg/models/shared")

type DcimDeviceBayTemplatesReadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DcimDeviceBayTemplatesReadRequest struct {
    PathParams DcimDeviceBayTemplatesReadPathParams 
    
}

type DcimDeviceBayTemplatesReadResponse struct {
    ContentType string 
    DeviceBayTemplate *shared.DeviceBayTemplate 
    StatusCode int64 
    
}

