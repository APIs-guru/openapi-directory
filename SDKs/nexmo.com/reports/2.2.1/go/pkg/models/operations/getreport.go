package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportPathParams struct {
	ReportID string `pathParam:"style=simple,explode=false,name=report_id"`
}

type GetReportSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetReportRequest struct {
	PathParams GetReportPathParams
	Security   GetReportSecurity
}

type GetReportResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetReport200ApplicationJSONOneOf *interface{}
	GetReport401ApplicationJSONAny   *interface{}
	GetReport404ApplicationJSONAny   *interface{}
}
