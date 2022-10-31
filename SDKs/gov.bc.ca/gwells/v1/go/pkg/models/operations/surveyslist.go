package operations

import (
	"openapi/pkg/models/shared"
)

type SurveysListResponse struct {
	ContentType string
	StatusCode  int64
	Surveys     []shared.Survey
}
