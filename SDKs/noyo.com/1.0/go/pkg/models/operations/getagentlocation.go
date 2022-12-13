package operations

import (
	"openapi/pkg/models/shared"
)

type GetAgentLocationPathParams struct {
	AgentID    string `pathParam:"style=simple,explode=false,name=agent_id"`
	LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
}

type GetAgentLocationRequest struct {
	PathParams GetAgentLocationPathParams
}

type GetAgentLocationResponse struct {
	AgentLocationResult *shared.AgentLocationResult
	ContentType         string
	StatusCode          int64
}
