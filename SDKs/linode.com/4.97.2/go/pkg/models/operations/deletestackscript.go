package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStackScriptPathParams struct {
	StackscriptID string `pathParam:"style=simple,explode=false,name=stackscriptId"`
}

type DeleteStackScriptSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteStackScriptDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteStackScriptRequest struct {
	PathParams DeleteStackScriptPathParams
	Security   DeleteStackScriptSecurity
}

type DeleteStackScriptResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	DeleteStackScript200ApplicationJSONObject     map[string]interface{}
	DeleteStackScriptDefaultApplicationJSONObject *DeleteStackScriptDefaultApplicationJSON
}
