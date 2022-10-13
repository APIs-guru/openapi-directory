package operations

import (
	"openapi/pkg/models/shared"
)

type StartScreenshotTestSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type StartScreenshotTestRequest struct {
	Request  shared.ScreenshotPayload `request:"mediaType=application/json"`
	Security StartScreenshotTestSecurity
}

type StartScreenshotTestResponse struct {
	AccessDenied              *interface{}
	ContentType               string
	Forbidden                 *interface{}
	StatusCode                int64
	StartScreenshotBadRequest *shared.StartScreenshotBadRequest
	StartScreenshotSuccess    *shared.StartScreenshotSuccess
}
