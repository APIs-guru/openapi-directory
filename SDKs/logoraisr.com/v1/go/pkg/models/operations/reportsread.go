package operations

import (
	"openapi/pkg/models/shared"
)

type ReportsReadPathParams struct {
	ReportNumber string `pathParam:"style=simple,explode=false,name=report_number"`
}

type ReportsReadRequest struct {
	PathParams ReportsReadPathParams
}

type ReportsReadResponse struct {
	ContentType string
	Report      *shared.Report
	StatusCode  int64
}
