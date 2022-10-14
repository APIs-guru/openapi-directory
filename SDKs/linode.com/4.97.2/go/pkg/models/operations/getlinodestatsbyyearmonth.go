package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeStatsByYearMonthPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
	Month    int64 `pathParam:"style=simple,explode=false,name=month"`
	Year     int64 `pathParam:"style=simple,explode=false,name=year"`
}

type GetLinodeStatsByYearMonthSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLinodeStatsByYearMonthSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLinodeStatsByYearMonthSecurity struct {
	Option1 *GetLinodeStatsByYearMonthSecurityOption1 `security:"option"`
	Option2 *GetLinodeStatsByYearMonthSecurityOption2 `security:"option"`
}

type GetLinodeStatsByYearMonthRequest struct {
	PathParams GetLinodeStatsByYearMonthPathParams
	Security   GetLinodeStatsByYearMonthSecurity
}

type GetLinodeStatsByYearMonthDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeStatsByYearMonthResponse struct {
	ContentType                                           string
	LinodeStats                                           *shared.LinodeStats
	StatusCode                                            int64
	GetLinodeStatsByYearMonthDefaultApplicationJSONObject *GetLinodeStatsByYearMonthDefaultApplicationJSON
}
