package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeVersionPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetLkeVersionSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLkeVersionDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLkeVersionRequest struct {
	PathParams GetLkeVersionPathParams
	Security   GetLkeVersionSecurity
}

type GetLkeVersionResponse struct {
	ContentType                               string
	LkeVersion                                *shared.LkeVersion
	StatusCode                                int64
	GetLkeVersionDefaultApplicationJSONObject *GetLkeVersionDefaultApplicationJSON
}
