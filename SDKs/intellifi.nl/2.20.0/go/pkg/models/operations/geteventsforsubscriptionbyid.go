package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEventsForSubscriptionByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEventsForSubscriptionByIDQueryParams struct {
	After             *time.Time                         `queryParam:"style=form,explode=true,name=after"`
	AfterID           *string                            `queryParam:"style=form,explode=true,name=after_id"`
	Before            *string                            `queryParam:"style=form,explode=true,name=before"`
	BeforeID          *string                            `queryParam:"style=form,explode=true,name=before_id"`
	From              *string                            `queryParam:"style=form,explode=true,name=from"`
	FromID            *string                            `queryParam:"style=form,explode=true,name=from_id"`
	ID                *string                            `queryParam:"style=form,explode=true,name=id"`
	IDOnly            *bool                              `queryParam:"style=form,explode=true,name=id_only"`
	Limit             *int64                             `queryParam:"style=form,explode=true,name=limit"`
	Populate          *string                            `queryParam:"style=form,explode=true,name=populate"`
	ResultsOnly       *bool                              `queryParam:"style=form,explode=true,name=results_only"`
	Select            *string                            `queryParam:"style=form,explode=true,name=select"`
	Sort              *string                            `queryParam:"style=form,explode=true,name=sort"`
	TimeCreated       *string                            `queryParam:"style=form,explode=true,name=time_created"`
	TimeEvent         *string                            `queryParam:"style=form,explode=true,name=time_event"`
	TimeExpire        *string                            `queryParam:"style=form,explode=true,name=time_expire"`
	TimeoutS          *float64                           `queryParam:"style=form,explode=true,name=timeout_s"`
	TopicAction       *shared.EventTopicActionEnum       `queryParam:"style=form,explode=true,name=topic.action"`
	TopicResource     *string                            `queryParam:"style=form,explode=true,name=topic.resource"`
	TopicResourceType *shared.EventTopicResourceTypeEnum `queryParam:"style=form,explode=true,name=topic.resource_type"`
	Until             *string                            `queryParam:"style=form,explode=true,name=until"`
	UntilID           *string                            `queryParam:"style=form,explode=true,name=until_id"`
}

type GetEventsForSubscriptionByIDRequest struct {
	PathParams  GetEventsForSubscriptionByIDPathParams
	QueryParams GetEventsForSubscriptionByIDQueryParams
}

type GetEventsForSubscriptionByID200ApplicationJSON struct {
	Count           *int64         `json:"count,omitempty"`
	CountCurrent    *int64         `json:"count_current,omitempty"`
	IsLimited       *bool          `json:"is_limited,omitempty"`
	NextURL         *string        `json:"next_url,omitempty"`
	QueryDurationMs *int64         `json:"query_duration_ms,omitempty"`
	Results         []shared.Event `json:"results,omitempty"`
	URL             *string        `json:"url,omitempty"`
}

type GetEventsForSubscriptionByIDResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetEventsForSubscriptionByID200ApplicationJSONObject *GetEventsForSubscriptionByID200ApplicationJSON
}
