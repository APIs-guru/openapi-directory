package operations

import (
	"openapi/pkg/models/shared"
)

type GetProfileGrantsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetProfileGrantsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetProfileGrantsSecurity struct {
	Option1 *GetProfileGrantsSecurityOption1 `security:"option"`
	Option2 *GetProfileGrantsSecurityOption2 `security:"option"`
}

type GetProfileGrantsRequest struct {
	Security GetProfileGrantsSecurity
}

type GetProfileGrantsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetProfileGrantsResponse struct {
	ContentType                                  string
	GrantsResponse                               *shared.GrantsResponse
	StatusCode                                   int64
	GetProfileGrantsDefaultApplicationJSONObject *GetProfileGrantsDefaultApplicationJSON
}
