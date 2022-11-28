package operations

import (
	"openapi/pkg/models/shared"
)

type GetLkeVersionsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLkeVersions200ApplicationJSON struct {
	Data    []shared.LkeVersion `json:"data,omitempty"`
	Page    *int64              `json:"page,omitempty"`
	Pages   *int64              `json:"pages,omitempty"`
	Results *int64              `json:"results,omitempty"`
}

type GetLkeVersionsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLkeVersionsRequest struct {
	Security GetLkeVersionsSecurity
}

type GetLkeVersionsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetLkeVersions200ApplicationJSONObject     *GetLkeVersions200ApplicationJSON
	GetLkeVersionsDefaultApplicationJSONObject *GetLkeVersionsDefaultApplicationJSON
}
