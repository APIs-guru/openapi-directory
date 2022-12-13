package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupCoveragePlansPathParams struct {
	GroupCoverageID string `pathParam:"style=simple,explode=false,name=group_coverage_id"`
}

type GetGroupCoveragePlansRequest struct {
	PathParams GetGroupCoveragePlansPathParams
}

type GetGroupCoveragePlansResponse struct {
	ContentType                 string
	PaginatedCoveragePlanResult *shared.PaginatedCoveragePlanResult
	StatusCode                  int64
}
