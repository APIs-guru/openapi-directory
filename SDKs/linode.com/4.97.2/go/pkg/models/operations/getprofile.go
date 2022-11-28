package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetProfileDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetProfileRequest struct {
	Security GetProfileSecurity
}

type GetProfileResponse struct {
	ContentType                            string
	Profile                                *shared.Profile
	StatusCode                             int64
	GetProfileDefaultApplicationJSONObject *GetProfileDefaultApplicationJSON
}
