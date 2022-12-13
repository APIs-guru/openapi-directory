package operations

import (
	"openapi/pkg/models/shared"
)

type EditAgentPathParams struct {
	AgentID string `pathParam:"style=simple,explode=false,name=agent_id"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type EditAgentRequest struct {
	PathParams EditAgentPathParams
	Request    shared.AgentEditRequest `request:"mediaType=application/json"`
}

type EditAgentResponse struct {
	AgentResult *shared.AgentResult
	ContentType string
	StatusCode  int64
}
