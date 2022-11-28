package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLongviewClientSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateLongviewClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateLongviewClientRequest struct {
	Request  shared.LongviewClientInput `request:"mediaType=application/json"`
	Security CreateLongviewClientSecurity
}

type CreateLongviewClientResponse struct {
	ContentType                                      string
	LongviewClient                                   *shared.LongviewClient
	StatusCode                                       int64
	CreateLongviewClientDefaultApplicationJSONObject *CreateLongviewClientDefaultApplicationJSON
}
