package operations

import (
	"openapi/pkg/models/shared"
)

type SendSystemCommandPathParams struct {
	Command   shared.GeneralCommandTypeEnum `pathParam:"style=simple,explode=false,name=command"`
	SessionID string                        `pathParam:"style=simple,explode=false,name=sessionId"`
}

type SendSystemCommandSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SendSystemCommandRequest struct {
	PathParams SendSystemCommandPathParams
	Security   SendSystemCommandSecurity
}

type SendSystemCommandResponse struct {
	ContentType string
	StatusCode  int64
}
