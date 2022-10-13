package operations

import (
	"openapi/pkg/models/shared"
)

type GetAdministrationPlanningLevelsHeaders struct {
	Token *string `header:"name=Token"`
}

type GetAdministrationPlanningLevelsRequest struct {
	Headers GetAdministrationPlanningLevelsHeaders
}

type GetAdministrationPlanningLevelsResponse struct {
	Body                       []byte
	ContentType                string
	PlanningLevelInfoResponses []shared.PlanningLevelInfoResponse
	StatusCode                 int64
}
