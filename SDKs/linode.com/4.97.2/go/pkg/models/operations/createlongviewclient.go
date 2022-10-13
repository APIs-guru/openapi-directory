package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLongviewClientSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateLongviewClientSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateLongviewClientSecurity struct {
	Option1 *CreateLongviewClientSecurityOption1 `security:"option"`
	Option2 *CreateLongviewClientSecurityOption2 `security:"option"`
}

type CreateLongviewClientRequest struct {
	Request  shared.LongviewClient `request:"mediaType=application/json"`
	Security CreateLongviewClientSecurity
}

type CreateLongviewClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CreateLongviewClientResponse struct {
	ContentType                                      string
	LongviewClient                                   *shared.LongviewClient
	StatusCode                                       int64
	CreateLongviewClientDefaultApplicationJSONObject *CreateLongviewClientDefaultApplicationJSON
}
