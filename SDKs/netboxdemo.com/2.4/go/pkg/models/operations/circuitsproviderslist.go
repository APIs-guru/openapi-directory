package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsProvidersListQueryParams struct {
	Account *string  `queryParam:"style=form,explode=true,name=account"`
	Asn     *float64 `queryParam:"style=form,explode=true,name=asn"`
	IDIn    *string  `queryParam:"style=form,explode=true,name=id__in"`
	Limit   *int64   `queryParam:"style=form,explode=true,name=limit"`
	Name    *string  `queryParam:"style=form,explode=true,name=name"`
	Offset  *int64   `queryParam:"style=form,explode=true,name=offset"`
	Q       *string  `queryParam:"style=form,explode=true,name=q"`
	Site    *string  `queryParam:"style=form,explode=true,name=site"`
	SiteID  *string  `queryParam:"style=form,explode=true,name=site_id"`
	Slug    *string  `queryParam:"style=form,explode=true,name=slug"`
	Tag     *string  `queryParam:"style=form,explode=true,name=tag"`
}

type CircuitsProvidersListRequest struct {
	QueryParams CircuitsProvidersListQueryParams
}

type CircuitsProvidersList200ApplicationJSON struct {
	Count    int64             `json:"count"`
	Next     *string           `json:"next"`
	Previous *string           `json:"previous"`
	Results  []shared.Provider `json:"results"`
}

type CircuitsProvidersListResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	CircuitsProvidersList200ApplicationJSONObject *CircuitsProvidersList200ApplicationJSON
}
