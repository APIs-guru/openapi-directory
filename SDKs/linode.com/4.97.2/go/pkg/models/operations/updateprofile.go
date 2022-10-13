package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProfileSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateProfileSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateProfileSecurity struct {
	Option1 *UpdateProfileSecurityOption1 `security:"option"`
	Option2 *UpdateProfileSecurityOption2 `security:"option"`
}

type UpdateProfileRequest struct {
	Request  shared.Profile `request:"mediaType=application/json"`
	Security UpdateProfileSecurity
}

type UpdateProfileDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type UpdateProfileResponse struct {
	ContentType                               string
	Profile                                   *shared.Profile
	StatusCode                                int64
	UpdateProfileDefaultApplicationJSONObject *UpdateProfileDefaultApplicationJSON
}
