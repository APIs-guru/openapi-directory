package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApplicationAgentPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type CreateApplicationAgentRequest struct {
	PathParams CreateApplicationAgentPathParams
	Request    shared.AgentCreateRequest `request:"mediaType=application/json"`
}

type CreateApplicationAgentResponse struct {
	AgentResult *shared.AgentResult
	ContentType string
	StatusCode  int64
}
