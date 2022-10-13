package operations

import (
	"openapi/pkg/models/shared"
)

type CancelReportPathParams struct {
	ReportID string `pathParam:"style=simple,explode=false,name=report_id"`
}

type CancelReportSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type CancelReportRequest struct {
	PathParams CancelReportPathParams
	Security   CancelReportSecurity
}

type CancelReportResponse struct {
	ContentType                         string
	StatusCode                          int64
	CancelReport200ApplicationJSONOneOf *interface{}
	CancelReport401ApplicationJSONAny   *interface{}
	CancelReport404ApplicationJSONAny   *interface{}
	CancelReport409ApplicationJSONAny   *interface{}
}
