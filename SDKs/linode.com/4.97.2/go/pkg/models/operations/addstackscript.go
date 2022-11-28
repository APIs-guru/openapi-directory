package operations

import (
	"openapi/pkg/models/shared"
)

type AddStackScriptRequestBodyInput struct {
	Description *string  `json:"description,omitempty"`
	Images      []string `json:"images"`
	IsPublic    *bool    `json:"is_public,omitempty"`
	Label       string   `json:"label"`
	RevNote     *string  `json:"rev_note,omitempty"`
	Script      string   `json:"script"`
}

type AddStackScriptSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type AddStackScriptDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AddStackScriptRequest struct {
	Request  AddStackScriptRequestBodyInput `request:"mediaType=application/json"`
	Security AddStackScriptSecurity
}

type AddStackScriptResponse struct {
	ContentType                                string
	StackScript                                *shared.StackScript
	StatusCode                                 int64
	AddStackScriptDefaultApplicationJSONObject *AddStackScriptDefaultApplicationJSON
}
