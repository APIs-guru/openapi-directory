package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeStatsPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
}

type GetLinodeStatsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLinodeStatsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLinodeStatsSecurity struct {
	Option1 *GetLinodeStatsSecurityOption1 `security:"option"`
	Option2 *GetLinodeStatsSecurityOption2 `security:"option"`
}

type GetLinodeStatsRequest struct {
	PathParams GetLinodeStatsPathParams
	Security   GetLinodeStatsSecurity
}

type GetLinodeStatsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLinodeStatsResponse struct {
	ContentType                                string
	LinodeStats                                *shared.LinodeStats
	StatusCode                                 int64
	GetLinodeStatsDefaultApplicationJSONObject *GetLinodeStatsDefaultApplicationJSON
}
