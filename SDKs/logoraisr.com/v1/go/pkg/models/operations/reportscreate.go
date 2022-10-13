package operations

import (
	"openapi/pkg/models/shared"
)

type ReportsCreateRequest struct {
	Request shared.ReportRequest `request:"mediaType=application/json"`
}

type ReportsCreateResponse struct {
	ContentType    string
	ReportResponse *shared.ReportResponse
	StatusCode     int64
}
