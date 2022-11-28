package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceBayTemplatesCreateRequest struct {
	Request shared.WritableDeviceBayTemplateInput `request:"mediaType=application/json"`
}

type DcimDeviceBayTemplatesCreateResponse struct {
	ContentType       string
	DeviceBayTemplate *shared.DeviceBayTemplate
	StatusCode        int64
}
