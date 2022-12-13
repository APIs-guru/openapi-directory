package operations

import (
	"openapi/pkg/models/shared"
)

type GetAgentLocationsPathParams struct {
	AgentID string `pathParam:"style=simple,explode=false,name=agent_id"`
}

type GetAgentLocationsQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetAgentLocationsRequest struct {
	PathParams  GetAgentLocationsPathParams
	QueryParams GetAgentLocationsQueryParams
}

type GetAgentLocationsResponse struct {
	ContentType                  string
	PaginatedAgentLocationResult *shared.PaginatedAgentLocationResult
	StatusCode                   int64
}
