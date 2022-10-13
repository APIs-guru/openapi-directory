package operations

import (
	"openapi/pkg/models/shared"
)

type StopScreenshotsTestPathParams struct {
	TestID string `pathParam:"style=simple,explode=false,name=test_id"`
}

type StopScreenshotsTestSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type StopScreenshotsTestRequest struct {
	PathParams StopScreenshotsTestPathParams
	Security   StopScreenshotsTestSecurity
}

type StopScreenshotsTestResponse struct {
	AccessDenied           *interface{}
	ContentType            string
	Forbidden              *interface{}
	StatusCode             int64
	StopScreenshotNotFound *interface{}
	StopScreenshotSuccess  *interface{}
}
