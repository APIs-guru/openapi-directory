package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserGrantsPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetUserGrantsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetUserGrantsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetUserGrantsRequest struct {
	PathParams GetUserGrantsPathParams
	Security   GetUserGrantsSecurity
}

type GetUserGrantsResponse struct {
	ContentType                               string
	GrantsResponse                            *shared.GrantsResponse
	StatusCode                                int64
	GetUserGrantsDefaultApplicationJSONObject *GetUserGrantsDefaultApplicationJSON
}
