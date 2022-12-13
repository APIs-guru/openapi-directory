package operations

import (
	"openapi/pkg/models/shared"
)

type GetAgentContactPathParams struct {
	AgentID   string `pathParam:"style=simple,explode=false,name=agent_id"`
	ContactID string `pathParam:"style=simple,explode=false,name=contact_id"`
}

type GetAgentContactRequest struct {
	PathParams GetAgentContactPathParams
}

type GetAgentContactResponse struct {
	AgentContactResult *shared.AgentContactResult
	ContentType        string
	StatusCode         int64
}
