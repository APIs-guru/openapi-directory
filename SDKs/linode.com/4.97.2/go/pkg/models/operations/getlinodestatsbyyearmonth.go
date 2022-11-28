package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeStatsByYearMonthPathParams struct {
	LinodeID int64 `pathParam:"style=simple,explode=false,name=linodeId"`
	Month    int64 `pathParam:"style=simple,explode=false,name=month"`
	Year     int64 `pathParam:"style=simple,explode=false,name=year"`
}

type GetLinodeStatsByYearMonthSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeStatsByYearMonthDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeStatsByYearMonthRequest struct {
	PathParams GetLinodeStatsByYearMonthPathParams
	Security   GetLinodeStatsByYearMonthSecurity
}

type GetLinodeStatsByYearMonthResponse struct {
	ContentType                                           string
	LinodeStats                                           *shared.LinodeStats
	StatusCode                                            int64
	GetLinodeStatsByYearMonthDefaultApplicationJSONObject *GetLinodeStatsByYearMonthDefaultApplicationJSON
}
