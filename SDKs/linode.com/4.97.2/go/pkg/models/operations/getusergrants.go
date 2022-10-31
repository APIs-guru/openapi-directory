package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserGrantsPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUserGrantsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetUserGrantsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetUserGrantsSecurity struct {
	Option1 *GetUserGrantsSecurityOption1 `security:"option"`
	Option2 *GetUserGrantsSecurityOption2 `security:"option"`
}

type GetUserGrantsRequest struct {
	PathParams GetUserGrantsPathParams
	Security   GetUserGrantsSecurity
}

type GetUserGrantsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetUserGrantsResponse struct {
	ContentType                               string
	GrantsResponse                            *shared.GrantsResponse
	StatusCode                                int64
	GetUserGrantsDefaultApplicationJSONObject *GetUserGrantsDefaultApplicationJSON
}
