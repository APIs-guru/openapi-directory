package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupCoveragePathParams struct {
	GroupCoverageID string `pathParam:"style=simple,explode=false,name=group_coverage_id"`
}

type GetGroupCoverageRequest struct {
	PathParams GetGroupCoveragePathParams
}

type GetGroupCoverageResponse struct {
	ContentType         string
	GroupCoverageResult *shared.GroupCoverageResult
	StatusCode          int64
}
