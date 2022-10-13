package operations

import (
	"openapi/pkg/models/shared"
)

type SendFullGeneralCommandPathParams struct {
	SessionID string `pathParam:"style=simple,explode=false,name=sessionId"`
}

type SendFullGeneralCommandRequests struct {
	GeneralCommand  *shared.GeneralCommand `request:"mediaType=application/*+json"`
	GeneralCommand1 *shared.GeneralCommand `request:"mediaType=application/json"`
	GeneralCommand2 *shared.GeneralCommand `request:"mediaType=text/json"`
}

type SendFullGeneralCommandSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SendFullGeneralCommandRequest struct {
	PathParams SendFullGeneralCommandPathParams
	Request    SendFullGeneralCommandRequests
	Security   SendFullGeneralCommandSecurity
}

type SendFullGeneralCommandResponse struct {
	ContentType string
	StatusCode  int64
}
