package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasTopologyMapsListQueryParams struct {
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
	Site   *string `queryParam:"style=form,explode=true,name=site"`
	SiteID *string `queryParam:"style=form,explode=true,name=site_id"`
	Slug   *string `queryParam:"style=form,explode=true,name=slug"`
}

type ExtrasTopologyMapsListRequest struct {
	QueryParams ExtrasTopologyMapsListQueryParams
}

type ExtrasTopologyMapsList200ApplicationJSON struct {
	Count    int64                `json:"count"`
	Next     *string              `json:"next,omitempty"`
	Previous *string              `json:"previous,omitempty"`
	Results  []shared.TopologyMap `json:"results"`
}

type ExtrasTopologyMapsListResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	ExtrasTopologyMapsList200ApplicationJSONObject *ExtrasTopologyMapsList200ApplicationJSON
}
