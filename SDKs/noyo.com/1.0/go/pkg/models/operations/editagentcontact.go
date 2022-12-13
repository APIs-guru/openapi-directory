package operations

import (
	"openapi/pkg/models/shared"
)

type EditAgentContactPathParams struct {
	AgentID   string `pathParam:"style=simple,explode=false,name=agent_id"`
	ContactID string `pathParam:"style=simple,explode=false,name=contact_id"`
	Version   string `pathParam:"style=simple,explode=false,name=version"`
}

type EditAgentContactRequest struct {
	PathParams EditAgentContactPathParams
	Request    shared.AgentContactEditRequest `request:"mediaType=application/json"`
}

type EditAgentContactResponse struct {
	AgentContactResult *shared.AgentContactResult
	ContentType        string
	StatusCode         int64
}
