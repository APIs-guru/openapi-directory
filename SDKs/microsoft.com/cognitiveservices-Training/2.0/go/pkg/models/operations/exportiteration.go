package operations

import (
	"openapi/pkg/models/shared"
)

type ExportIterationPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type ExportIterationQueryParams struct {
	Flavor   *string `queryParam:"style=form,explode=true,name=flavor"`
	Platform string  `queryParam:"style=form,explode=true,name=platform"`
}

type ExportIterationHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type ExportIterationRequest struct {
	PathParams  ExportIterationPathParams
	QueryParams ExportIterationQueryParams
	Headers     ExportIterationHeaders
}

type ExportIterationResponse struct {
	Body        []byte
	ContentType string
	Export      *shared.Export
	StatusCode  int64
}
