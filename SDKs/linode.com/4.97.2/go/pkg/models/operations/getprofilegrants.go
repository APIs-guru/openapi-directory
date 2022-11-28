package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileGrantsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetProfileGrantsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetProfileGrantsRequest struct {
	Security GetProfileGrantsSecurity
}

type GetProfileGrantsResponse struct {
	ContentType                                  string
	GrantsResponse                               *shared.GrantsResponse
	StatusCode                                   int64
	GetProfileGrantsDefaultApplicationJSONObject *GetProfileGrantsDefaultApplicationJSON
}
