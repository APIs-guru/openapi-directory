package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceBaysCreateRequest struct {
	Request shared.WritableDeviceBayInput `request:"mediaType=application/json"`
}

type DcimDeviceBaysCreateResponse struct {
	ContentType string
	DeviceBay   *shared.DeviceBay
	StatusCode  int64
}
