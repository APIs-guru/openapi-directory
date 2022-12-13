package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAgentContactPathParams struct {
	AgentID string `pathParam:"style=simple,explode=false,name=agent_id"`
}

type CreateAgentContactRequest struct {
	PathParams CreateAgentContactPathParams
	Request    shared.AgentContactCreateRequest `request:"mediaType=application/json"`
}

type CreateAgentContactResponse struct {
	AgentContactResult *shared.AgentContactResult
	ContentType        string
	StatusCode         int64
}
