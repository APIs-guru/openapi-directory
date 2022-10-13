package operations

import (
	"openapi/pkg/models/shared"
)

type IpamAggregatesListQueryParams struct {
	DateAdded *string `queryParam:"style=form,explode=true,name=date_added"`
	Family    *string `queryParam:"style=form,explode=true,name=family"`
	IDIn      *string `queryParam:"style=form,explode=true,name=id__in"`
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q         *string `queryParam:"style=form,explode=true,name=q"`
	Rir       *string `queryParam:"style=form,explode=true,name=rir"`
	RirID     *string `queryParam:"style=form,explode=true,name=rir_id"`
	Tag       *string `queryParam:"style=form,explode=true,name=tag"`
}

type IpamAggregatesListRequest struct {
	QueryParams IpamAggregatesListQueryParams
}

type IpamAggregatesList200ApplicationJSON struct {
	Count    int64              `json:"count"`
	Next     *string            `json:"next"`
	Previous *string            `json:"previous"`
	Results  []shared.Aggregate `json:"results"`
}

type IpamAggregatesListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	IpamAggregatesList200ApplicationJSONObject *IpamAggregatesList200ApplicationJSON
}
