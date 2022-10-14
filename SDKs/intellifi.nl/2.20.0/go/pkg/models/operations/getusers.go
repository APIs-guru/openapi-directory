package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetUsersQueryParams struct {
	After       *time.Time `queryParam:"style=form,explode=true,name=after"`
	AfterID     *string    `queryParam:"style=form,explode=true,name=after_id"`
	Before      *string    `queryParam:"style=form,explode=true,name=before"`
	BeforeID    *string    `queryParam:"style=form,explode=true,name=before_id"`
	Email       *string    `queryParam:"style=form,explode=true,name=email"`
	FirstName   *string    `queryParam:"style=form,explode=true,name=first_name"`
	From        *string    `queryParam:"style=form,explode=true,name=from"`
	FromID      *string    `queryParam:"style=form,explode=true,name=from_id"`
	ID          *string    `queryParam:"style=form,explode=true,name=id"`
	IDOnly      *bool      `queryParam:"style=form,explode=true,name=id_only"`
	IsAdmin     *bool      `queryParam:"style=form,explode=true,name=is_admin"`
	IsLocked    *bool      `queryParam:"style=form,explode=true,name=is_locked"`
	LastName    *string    `queryParam:"style=form,explode=true,name=last_name"`
	Limit       *int64     `queryParam:"style=form,explode=true,name=limit"`
	Populate    *string    `queryParam:"style=form,explode=true,name=populate"`
	ResultsOnly *bool      `queryParam:"style=form,explode=true,name=results_only"`
	Select      *string    `queryParam:"style=form,explode=true,name=select"`
	Sort        *string    `queryParam:"style=form,explode=true,name=sort"`
	TimeCreated *string    `queryParam:"style=form,explode=true,name=time_created"`
	TimeUpdated *string    `queryParam:"style=form,explode=true,name=time_updated"`
	TimeoutS    *float64   `queryParam:"style=form,explode=true,name=timeout_s"`
	Until       *string    `queryParam:"style=form,explode=true,name=until"`
	UntilID     *string    `queryParam:"style=form,explode=true,name=until_id"`
}

type GetUsersSecurity struct {
	CookieSid shared.SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
	Security    GetUsersSecurity
}

type GetUsers200ApplicationJSON struct {
	Count           *int64        `json:"count,omitempty"`
	CountCurrent    *int64        `json:"count_current,omitempty"`
	IsLimited       *bool         `json:"is_limited,omitempty"`
	NextURL         *string       `json:"next_url,omitempty"`
	QueryDurationMs *int64        `json:"query_duration_ms,omitempty"`
	Results         []shared.User `json:"results,omitempty"`
	URL             *string       `json:"url,omitempty"`
}

type GetUsersResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetUsers200ApplicationJSONObject *GetUsers200ApplicationJSON
}
