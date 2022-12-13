package operations

import (
	"openapi/pkg/models/shared"
)

type GetAgentContactsPathParams struct {
	AgentID string `pathParam:"style=simple,explode=false,name=agent_id"`
}

type GetAgentContactsQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetAgentContactsRequest struct {
	PathParams  GetAgentContactsPathParams
	QueryParams GetAgentContactsQueryParams
}

type GetAgentContactsResponse struct {
	ContentType                  string
	PaginatedAgentContactResults *shared.PaginatedAgentContactResults
	StatusCode                   int64
}
