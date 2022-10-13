package operations

import (
	"openapi/pkg/models/shared"
)

type GetExportsPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetExportsHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type GetExportsRequest struct {
	PathParams GetExportsPathParams
	Headers    GetExportsHeaders
}

type GetExportsResponse struct {
	Body        []byte
	ContentType string
	Exports     []shared.Export
	StatusCode  int64
}
