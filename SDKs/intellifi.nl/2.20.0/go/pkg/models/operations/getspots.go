package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSpotsQueryParams struct {
	After          *time.Time `queryParam:"style=form,explode=true,name=after"`
	AfterID        *string    `queryParam:"style=form,explode=true,name=after_id"`
	Before         *string    `queryParam:"style=form,explode=true,name=before"`
	BeforeID       *string    `queryParam:"style=form,explode=true,name=before_id"`
	From           *string    `queryParam:"style=form,explode=true,name=from"`
	FromID         *string    `queryParam:"style=form,explode=true,name=from_id"`
	ID             *string    `queryParam:"style=form,explode=true,name=id"`
	IDOnly         *bool      `queryParam:"style=form,explode=true,name=id_only"`
	IsOnline       *bool      `queryParam:"style=form,explode=true,name=is_online"`
	Limit          *int64     `queryParam:"style=form,explode=true,name=limit"`
	Populate       *string    `queryParam:"style=form,explode=true,name=populate"`
	RequestCounter *int64     `queryParam:"style=form,explode=true,name=request_counter"`
	ResultsOnly    *bool      `queryParam:"style=form,explode=true,name=results_only"`
	Select         *string    `queryParam:"style=form,explode=true,name=select"`
	SerialNumber   *int64     `queryParam:"style=form,explode=true,name=serial_number"`
	Sort           *string    `queryParam:"style=form,explode=true,name=sort"`
	TimeCreated    *string    `queryParam:"style=form,explode=true,name=time_created"`
	TimeUpdated    *string    `queryParam:"style=form,explode=true,name=time_updated"`
	TimeoutS       *float64   `queryParam:"style=form,explode=true,name=timeout_s"`
	Until          *string    `queryParam:"style=form,explode=true,name=until"`
	UntilID        *string    `queryParam:"style=form,explode=true,name=until_id"`
}

type GetSpotsRequest struct {
	QueryParams GetSpotsQueryParams
}

type GetSpots200ApplicationJSON struct {
	Count           *int64           `json:"count"`
	CountCurrent    *int64           `json:"count_current"`
	IsLimited       *bool            `json:"is_limited"`
	NextURL         *string          `json:"next_url"`
	QueryDurationMs *int64           `json:"query_duration_ms"`
	Results         []shared.SpotGet `json:"results"`
	URL             *string          `json:"url"`
}

type GetSpotsResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetSpots200ApplicationJSONObject *GetSpots200ApplicationJSON
}
