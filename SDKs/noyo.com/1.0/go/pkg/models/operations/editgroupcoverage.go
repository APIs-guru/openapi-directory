package operations

import (
	"openapi/pkg/models/shared"
)

type EditGroupCoveragePathParams struct {
	GroupCoverageID string `pathParam:"style=simple,explode=false,name=group_coverage_id"`
	Version         string `pathParam:"style=simple,explode=false,name=version"`
}

type EditGroupCoverageRequest struct {
	PathParams EditGroupCoveragePathParams
	Request    shared.GroupCoverageEditRequest `request:"mediaType=application/json"`
}

type EditGroupCoverageResponse struct {
	ContentType         string
	GroupCoverageResult *shared.GroupCoverageResult
	StatusCode          int64
}
