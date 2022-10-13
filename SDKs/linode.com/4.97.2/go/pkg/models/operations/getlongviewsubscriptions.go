package operations

import (
	"openapi/pkg/models/shared"
)

type GetLongviewSubscriptionsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetLongviewSubscriptionsRequest struct {
	QueryParams GetLongviewSubscriptionsQueryParams
}

type GetLongviewSubscriptions200ApplicationJSON struct {
	Data    []shared.LongviewSubscription `json:"data"`
	Page    *int64                        `json:"page"`
	Pages   *int64                        `json:"pages"`
	Results *int64                        `json:"results"`
}

type GetLongviewSubscriptionsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLongviewSubscriptionsResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetLongviewSubscriptions200ApplicationJSONObject     *GetLongviewSubscriptions200ApplicationJSON
	GetLongviewSubscriptionsDefaultApplicationJSONObject *GetLongviewSubscriptionsDefaultApplicationJSON
}
