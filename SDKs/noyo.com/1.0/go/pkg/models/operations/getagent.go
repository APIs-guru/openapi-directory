package operations

import (
	"openapi/pkg/models/shared"
)

type GetAgentPathParams struct {
	AgentID string `pathParam:"style=simple,explode=false,name=agent_id"`
}

type GetAgentRequest struct {
	PathParams GetAgentPathParams
}

type GetAgentResponse struct {
	AgentResult *shared.AgentResult
	ContentType string
	StatusCode  int64
}
