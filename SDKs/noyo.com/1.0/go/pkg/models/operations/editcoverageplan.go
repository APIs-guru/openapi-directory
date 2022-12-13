package operations

import (
	"openapi/pkg/models/shared"
)

type EditCoveragePlanPathParams struct {
	PlanID  string `pathParam:"style=simple,explode=false,name=plan_id"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type EditCoveragePlanRequest struct {
	PathParams EditCoveragePlanPathParams
	Request    shared.CoveragePlanEditRequest `request:"mediaType=application/json"`
}

type EditCoveragePlanResponse struct {
	ContentType        string
	CoveragePlanResult *shared.CoveragePlanResult
	StatusCode         int64
}
