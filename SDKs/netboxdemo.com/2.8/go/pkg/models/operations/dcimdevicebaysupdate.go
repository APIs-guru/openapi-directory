package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceBaysUpdatePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceBaysUpdateRequest struct {
	PathParams DcimDeviceBaysUpdatePathParams
	Request    shared.WritableDeviceBay `request:"mediaType=application/json"`
}

type DcimDeviceBaysUpdateResponse struct {
	ContentType string
	DeviceBay   *shared.DeviceBay
	StatusCode  int64
}
