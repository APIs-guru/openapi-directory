package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationAgentsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type GetApplicationAgentsQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetApplicationAgentsRequest struct {
	PathParams  GetApplicationAgentsPathParams
	QueryParams GetApplicationAgentsQueryParams
}

type GetApplicationAgentsResponse struct {
	ContentType          string
	PaginatedAgentResult *shared.PaginatedAgentResult
	StatusCode           int64
}
