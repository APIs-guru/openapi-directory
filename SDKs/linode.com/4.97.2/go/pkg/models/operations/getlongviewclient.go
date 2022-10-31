package operations

import (
	"openapi/pkg/models/shared"
)

type GetLongviewClientPathParams struct {
	ClientID int64 `pathParam:"style=simple,explode=false,name=clientId"`
}

type GetLongviewClientSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLongviewClientSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLongviewClientSecurity struct {
	Option1 *GetLongviewClientSecurityOption1 `security:"option"`
	Option2 *GetLongviewClientSecurityOption2 `security:"option"`
}

type GetLongviewClientRequest struct {
	PathParams GetLongviewClientPathParams
	Security   GetLongviewClientSecurity
}

type GetLongviewClientDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLongviewClientResponse struct {
	ContentType                                   string
	LongviewClient                                *shared.LongviewClient
	StatusCode                                    int64
	GetLongviewClientDefaultApplicationJSONObject *GetLongviewClientDefaultApplicationJSON
}
