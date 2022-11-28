package operations

import (
	"openapi/pkg/models/shared"
)

type GetLongviewSubscriptionsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetLongviewSubscriptions200ApplicationJSON struct {
	Data    []shared.LongviewSubscription `json:"data,omitempty"`
	Page    *int64                        `json:"page,omitempty"`
	Pages   *int64                        `json:"pages,omitempty"`
	Results *int64                        `json:"results,omitempty"`
}

type GetLongviewSubscriptionsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLongviewSubscriptionsRequest struct {
	QueryParams GetLongviewSubscriptionsQueryParams
}

type GetLongviewSubscriptionsResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetLongviewSubscriptions200ApplicationJSONObject     *GetLongviewSubscriptions200ApplicationJSON
	GetLongviewSubscriptionsDefaultApplicationJSONObject *GetLongviewSubscriptionsDefaultApplicationJSON
}
