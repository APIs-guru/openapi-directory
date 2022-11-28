package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSubscriptionsQueryParams struct {
	After                   *time.Time `queryParam:"style=form,explode=true,name=after"`
	AfterID                 *string    `queryParam:"style=form,explode=true,name=after_id"`
	Before                  *string    `queryParam:"style=form,explode=true,name=before"`
	BeforeID                *string    `queryParam:"style=form,explode=true,name=before_id"`
	DatabaseHoldTimeH       *int64     `queryParam:"style=form,explode=true,name=database_hold_time_h"`
	Description             *string    `queryParam:"style=form,explode=true,name=description"`
	From                    *string    `queryParam:"style=form,explode=true,name=from"`
	FromID                  *string    `queryParam:"style=form,explode=true,name=from_id"`
	ID                      *string    `queryParam:"style=form,explode=true,name=id"`
	IDOnly                  *bool      `queryParam:"style=form,explode=true,name=id_only"`
	Limit                   *int64     `queryParam:"style=form,explode=true,name=limit"`
	Populate                *string    `queryParam:"style=form,explode=true,name=populate"`
	PopulateEvents          *bool      `queryParam:"style=form,explode=true,name=populate_events"`
	ResultsOnly             *bool      `queryParam:"style=form,explode=true,name=results_only"`
	Select                  *string    `queryParam:"style=form,explode=true,name=select"`
	Sort                    *string    `queryParam:"style=form,explode=true,name=sort"`
	TimeCreated             *string    `queryParam:"style=form,explode=true,name=time_created"`
	TimeUpdated             *string    `queryParam:"style=form,explode=true,name=time_updated"`
	TimeoutS                *float64   `queryParam:"style=form,explode=true,name=timeout_s"`
	TopicFilter             *string    `queryParam:"style=form,explode=true,name=topic_filter"`
	Until                   *string    `queryParam:"style=form,explode=true,name=until"`
	UntilID                 *string    `queryParam:"style=form,explode=true,name=until_id"`
	VerifyTargetCertificate *bool      `queryParam:"style=form,explode=true,name=verify_target_certificate"`
}

type GetSubscriptions200ApplicationJSON struct {
	Count           *int64                `json:"count,omitempty"`
	CountCurrent    *int64                `json:"count_current,omitempty"`
	IsLimited       *bool                 `json:"is_limited,omitempty"`
	NextURL         *string               `json:"next_url,omitempty"`
	QueryDurationMs *int64                `json:"query_duration_ms,omitempty"`
	Results         []shared.Subscription `json:"results,omitempty"`
	URL             *string               `json:"url,omitempty"`
}

type GetSubscriptionsRequest struct {
	QueryParams GetSubscriptionsQueryParams
}

type GetSubscriptionsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetSubscriptions200ApplicationJSONObject *GetSubscriptions200ApplicationJSON
}
