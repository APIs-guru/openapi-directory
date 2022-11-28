package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeStatsPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeStatsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeStatsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeStatsRequest struct {
	PathParams GetLinodeStatsPathParams
	Security   GetLinodeStatsSecurity
}

type GetLinodeStatsResponse struct {
	ContentType                                string
	LinodeStats                                *shared.LinodeStats
	StatusCode                                 int64
	GetLinodeStatsDefaultApplicationJSONObject *GetLinodeStatsDefaultApplicationJSON
}
