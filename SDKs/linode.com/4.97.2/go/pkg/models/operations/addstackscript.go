package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type AddStackScriptRequestBody struct {
	Created           *time.Time                `json:"created"`
	DeploymentsActive *int64                    `json:"deployments_active"`
	DeploymentsTotal  *int64                    `json:"deployments_total"`
	Description       *string                   `json:"description"`
	ID                *int64                    `json:"id"`
	Images            []string                  `json:"images"`
	IsPublic          *bool                     `json:"is_public"`
	Label             string                    `json:"label"`
	Mine              *bool                     `json:"mine"`
	RevNote           *string                   `json:"rev_note"`
	Script            string                    `json:"script"`
	Updated           *time.Time                `json:"updated"`
	UserDefinedFields []shared.UserDefinedField `json:"user_defined_fields"`
	UserGravatarID    *string                   `json:"user_gravatar_id"`
	Username          *string                   `json:"username"`
}

type AddStackScriptSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type AddStackScriptSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type AddStackScriptSecurity struct {
	Option1 *AddStackScriptSecurityOption1 `security:"option"`
	Option2 *AddStackScriptSecurityOption2 `security:"option"`
}

type AddStackScriptRequest struct {
	Request  AddStackScriptRequestBody `request:"mediaType=application/json"`
	Security AddStackScriptSecurity
}

type AddStackScriptDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type AddStackScriptResponse struct {
	ContentType                                string
	StackScript                                *shared.StackScript
	StatusCode                                 int64
	AddStackScriptDefaultApplicationJSONObject *AddStackScriptDefaultApplicationJSON
}
