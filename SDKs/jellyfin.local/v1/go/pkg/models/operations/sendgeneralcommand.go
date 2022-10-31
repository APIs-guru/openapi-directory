package operations

import (
	"openapi/pkg/models/shared"
)

type SendGeneralCommandPathParams struct {
	Command   shared.GeneralCommandTypeEnum `pathParam:"style=simple,explode=false,name=command"`
	SessionID string                        `pathParam:"style=simple,explode=false,name=sessionId"`
}

type SendGeneralCommandSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SendGeneralCommandRequest struct {
	PathParams SendGeneralCommandPathParams
	Security   SendGeneralCommandSecurity
}

type SendGeneralCommandResponse struct {
	ContentType string
	StatusCode  int64
}
