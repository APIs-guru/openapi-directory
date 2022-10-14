package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeVersionPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetLkeVersionSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLkeVersionSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLkeVersionSecurity struct {
	Option1 *GetLkeVersionSecurityOption1 `security:"option"`
	Option2 *GetLkeVersionSecurityOption2 `security:"option"`
}

type GetLkeVersionRequest struct {
	PathParams GetLkeVersionPathParams
	Security   GetLkeVersionSecurity
}

type GetLkeVersionDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLkeVersionResponse struct {
	ContentType                               string
	LkeVersion                                *shared.LkeVersion
	StatusCode                                int64
	GetLkeVersionDefaultApplicationJSONObject *GetLkeVersionDefaultApplicationJSON
}
