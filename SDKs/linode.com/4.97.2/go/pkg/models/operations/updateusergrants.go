package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserGrantsPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UpdateUserGrantsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateUserGrantsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateUserGrantsRequest struct {
	PathParams UpdateUserGrantsPathParams
	Request    shared.GrantsResponseInput `request:"mediaType=application/json"`
	Security   UpdateUserGrantsSecurity
}

type UpdateUserGrantsResponse struct {
	ContentType                                  string
	GrantsResponse                               *shared.GrantsResponse
	StatusCode                                   int64
	UpdateUserGrantsDefaultApplicationJSONObject *UpdateUserGrantsDefaultApplicationJSON
}
