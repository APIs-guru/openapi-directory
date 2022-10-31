package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceBaysPartialUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceBaysPartialUpdateRequest struct {
	PathParams DcimDeviceBaysPartialUpdatePathParams
	Request    shared.WritableDeviceBay `request:"mediaType=application/json"`
}

type DcimDeviceBaysPartialUpdateResponse struct {
	ContentType string
	DeviceBay   *shared.DeviceBay
	StatusCode  int64
}
