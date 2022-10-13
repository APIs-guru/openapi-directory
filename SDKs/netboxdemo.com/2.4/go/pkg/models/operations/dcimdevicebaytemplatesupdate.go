package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceBayTemplatesUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceBayTemplatesUpdateRequest struct {
	PathParams DcimDeviceBayTemplatesUpdatePathParams
	Request    shared.WritableDeviceBayTemplate `request:"mediaType=application/json"`
}

type DcimDeviceBayTemplatesUpdateResponse struct {
	ContentType       string
	DeviceBayTemplate *shared.DeviceBayTemplate
	StatusCode        int64
}
