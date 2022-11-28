package operations

import (
	"openapi/pkg/models/shared"
)

type GetLongviewClientPathParams struct {
	ClientID int64 `pathParam:"style=simple,explode=false,name=clientId"`
}

type GetLongviewClientSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLongviewClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLongviewClientRequest struct {
	PathParams GetLongviewClientPathParams
	Security   GetLongviewClientSecurity
}

type GetLongviewClientResponse struct {
	ContentType                                   string
	LongviewClient                                *shared.LongviewClient
	StatusCode                                    int64
	GetLongviewClientDefaultApplicationJSONObject *GetLongviewClientDefaultApplicationJSON
}
