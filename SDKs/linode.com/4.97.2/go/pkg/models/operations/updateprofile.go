package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProfileSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateProfileDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateProfileRequest struct {
	Request  shared.ProfileInput `request:"mediaType=application/json"`
	Security UpdateProfileSecurity
}

type UpdateProfileResponse struct {
	ContentType                               string
	Profile                                   *shared.Profile
	StatusCode                                int64
	UpdateProfileDefaultApplicationJSONObject *UpdateProfileDefaultApplicationJSON
}
