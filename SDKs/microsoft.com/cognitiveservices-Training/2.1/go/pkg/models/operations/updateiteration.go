package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIterationPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type UpdateIterationHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type UpdateIterationRequestsInput struct {
	ApplicationXML []byte                 `request:"mediaType=application/xml"`
	Iteration      *shared.IterationInput `request:"mediaType=application/json"`
	Iteration1     *shared.IterationInput `request:"mediaType=application/x-www-form-urlencoded"`
	Iteration2     *shared.IterationInput `request:"mediaType=text/json"`
	TextXML        []byte                 `request:"mediaType=text/xml"`
}

type UpdateIterationRequest struct {
	PathParams UpdateIterationPathParams
	Headers    UpdateIterationHeaders
	Request    UpdateIterationRequestsInput
}

type UpdateIterationResponse struct {
	Body        []byte
	ContentType string
	Iteration   *shared.Iteration
	StatusCode  int64
}
