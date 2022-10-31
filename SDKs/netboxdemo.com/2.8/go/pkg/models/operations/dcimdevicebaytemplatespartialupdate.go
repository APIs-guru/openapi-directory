package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceBayTemplatesPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceBayTemplatesPartialUpdateRequest struct {
	PathParams DcimDeviceBayTemplatesPartialUpdatePathParams
	Request    shared.WritableDeviceBayTemplate `request:"mediaType=application/json"`
}

type DcimDeviceBayTemplatesPartialUpdateResponse struct {
	ContentType       string
	DeviceBayTemplate *shared.DeviceBayTemplate
	StatusCode        int64
}
