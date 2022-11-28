package operations

import (
	"openapi/pkg/models/shared"
)

type GetStackScriptPathParams struct {
	StackscriptID string `pathParam:"style=simple,explode=false,name=stackscriptId"`
}

type GetStackScriptSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetStackScriptDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetStackScriptRequest struct {
	PathParams GetStackScriptPathParams
	Security   GetStackScriptSecurity
}

type GetStackScriptResponse struct {
	ContentType                                string
	StackScript                                *shared.StackScript
	StatusCode                                 int64
	GetStackScriptDefaultApplicationJSONObject *GetStackScriptDefaultApplicationJSON
}
