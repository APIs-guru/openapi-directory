package operations

import (
	"openapi/pkg/models/shared"
)

type EditAgentLocationPathParams struct {
	AgentID    string `pathParam:"style=simple,explode=false,name=agent_id"`
	LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
	Version    string `pathParam:"style=simple,explode=false,name=version"`
}

type EditAgentLocationRequest struct {
	PathParams EditAgentLocationPathParams
	Request    shared.AgentLocationEditRequest `request:"mediaType=application/json"`
}

type EditAgentLocationResponse struct {
	AgentLocationResult *shared.AgentLocationResult
	ContentType         string
	StatusCode          int64
}
