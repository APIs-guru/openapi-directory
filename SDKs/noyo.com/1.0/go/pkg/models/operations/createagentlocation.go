package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAgentLocationPathParams struct {
	AgentID string `pathParam:"style=simple,explode=false,name=agent_id"`
}

type CreateAgentLocationRequest struct {
	PathParams CreateAgentLocationPathParams
	Request    shared.AgentLocationCreateRequest `request:"mediaType=application/json"`
}

type CreateAgentLocationResponse struct {
	AgentLocationResult *shared.AgentLocationResult
	ContentType         string
	StatusCode          int64
}
