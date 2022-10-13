package operations

import (
	"openapi/pkg/models/shared"
)

type IpamAggregatesListQueryParams struct {
	Created        *string  `queryParam:"style=form,explode=true,name=created"`
	CreatedGte     *string  `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte     *string  `queryParam:"style=form,explode=true,name=created__lte"`
	DateAdded      *string  `queryParam:"style=form,explode=true,name=date_added"`
	DateAddedGt    *string  `queryParam:"style=form,explode=true,name=date_added__gt"`
	DateAddedGte   *string  `queryParam:"style=form,explode=true,name=date_added__gte"`
	DateAddedLt    *string  `queryParam:"style=form,explode=true,name=date_added__lt"`
	DateAddedLte   *string  `queryParam:"style=form,explode=true,name=date_added__lte"`
	DateAddedN     *string  `queryParam:"style=form,explode=true,name=date_added__n"`
	Family         *float64 `queryParam:"style=form,explode=true,name=family"`
	ID             *string  `queryParam:"style=form,explode=true,name=id"`
	IDGt           *string  `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte          *string  `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt           *string  `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte          *string  `queryParam:"style=form,explode=true,name=id__lte"`
	IDN            *string  `queryParam:"style=form,explode=true,name=id__n"`
	LastUpdated    *string  `queryParam:"style=form,explode=true,name=last_updated"`
	LastUpdatedGte *string  `queryParam:"style=form,explode=true,name=last_updated__gte"`
	LastUpdatedLte *string  `queryParam:"style=form,explode=true,name=last_updated__lte"`
	Limit          *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset         *int64   `queryParam:"style=form,explode=true,name=offset"`
	Prefix         *string  `queryParam:"style=form,explode=true,name=prefix"`
	Q              *string  `queryParam:"style=form,explode=true,name=q"`
	Rir            *string  `queryParam:"style=form,explode=true,name=rir"`
	RirN           *string  `queryParam:"style=form,explode=true,name=rir__n"`
	RirID          *string  `queryParam:"style=form,explode=true,name=rir_id"`
	RirIDN         *string  `queryParam:"style=form,explode=true,name=rir_id__n"`
	Tag            *string  `queryParam:"style=form,explode=true,name=tag"`
	TagN           *string  `queryParam:"style=form,explode=true,name=tag__n"`
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
