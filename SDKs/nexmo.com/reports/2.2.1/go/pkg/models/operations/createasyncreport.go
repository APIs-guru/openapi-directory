package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAsyncReportSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateAsyncReportRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security CreateAsyncReportSecurity
}

type CreateAsyncReportResponse struct {
	ContentType                              string
	StatusCode                               int64
	CreateAsyncReport200ApplicationJSONOneOf *interface{}
	CreateAsyncReport400ApplicationJSONAny   *interface{}
	CreateAsyncReport401ApplicationJSONAny   *interface{}
	CreateAsyncReport403ApplicationJSONAny   *interface{}
	CreateAsyncReport422ApplicationJSONAny   *interface{}
}
