package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupCoveragePathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type CreateGroupCoverageRequest struct {
	PathParams CreateGroupCoveragePathParams
	Request    shared.GroupCoverageCreateRequest `request:"mediaType=application/json"`
}

type CreateGroupCoverageResponse struct {
	ContentType         string
	GroupCoverageResult *shared.GroupCoverageResult
	StatusCode          int64
}
