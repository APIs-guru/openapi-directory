package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStackScriptPathParams struct {
	StackscriptID string `pathParam:"style=simple,explode=false,name=stackscriptId"`
}

type UpdateStackScriptSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateStackScriptDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateStackScriptRequest struct {
	PathParams UpdateStackScriptPathParams
	Request    *shared.StackScriptInput `request:"mediaType=application/json"`
	Security   UpdateStackScriptSecurity
}

type UpdateStackScriptResponse struct {
	ContentType                                   string
	StackScript                                   *shared.StackScript
	StatusCode                                    int64
	UpdateStackScriptDefaultApplicationJSONObject *UpdateStackScriptDefaultApplicationJSON
}
