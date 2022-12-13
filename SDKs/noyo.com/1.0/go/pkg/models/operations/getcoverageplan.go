package operations

import (
	"openapi/pkg/models/shared"
)

type GetCoveragePlanPathParams struct {
	PlanID string `pathParam:"style=simple,explode=false,name=plan_id"`
}

type GetCoveragePlanRequest struct {
	PathParams GetCoveragePlanPathParams
}

type GetCoveragePlanResponse struct {
	ContentType        string
	CoveragePlanResult *shared.CoveragePlanResult
	StatusCode         int64
}
