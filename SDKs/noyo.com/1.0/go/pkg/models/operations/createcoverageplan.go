package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCoveragePlanPathParams struct {
	GroupCoverageID string `pathParam:"style=simple,explode=false,name=group_coverage_id"`
}

type CreateCoveragePlanRequest struct {
	PathParams CreateCoveragePlanPathParams
	Request    shared.CoveragePlanCreateRequest `request:"mediaType=application/json"`
}

type CreateCoveragePlanResponse struct {
	ContentType        string
	CoveragePlanResult *shared.CoveragePlanResult
	StatusCode         int64
}
