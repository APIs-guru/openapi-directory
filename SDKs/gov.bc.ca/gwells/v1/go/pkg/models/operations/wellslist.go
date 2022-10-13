package operations

import (
	"openapi/pkg/models/shared"
)

type WellsListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type WellsListRequest struct {
	QueryParams WellsListQueryParams
}

type WellsList200ApplicationJSON struct {
	Count    int64             `json:"count"`
	Next     *string           `json:"next"`
	Previous *string           `json:"previous"`
	Results  []shared.WellList `json:"results"`
}

type WellsListResponse struct {
	ContentType                       string
	StatusCode                        int64
	WellsList200ApplicationJSONObject *WellsList200ApplicationJSON
}
