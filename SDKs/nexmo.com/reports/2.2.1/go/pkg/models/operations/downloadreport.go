package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadReportPathParams struct {
	FileID string `pathParam:"style=simple,explode=false,name=file_id"`
}

type DownloadReportSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type DownloadReportRequest struct {
	PathParams DownloadReportPathParams
	Security   DownloadReportSecurity
}

type DownloadReportResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	DownloadReport401ApplicationJSONAny *interface{}
	DownloadReport404ApplicationJSONAny *interface{}
}
