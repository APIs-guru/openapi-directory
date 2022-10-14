package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRackGroupsListQueryParams struct {
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q      *string `queryParam:"style=form,explode=true,name=q"`
	Site   *string `queryParam:"style=form,explode=true,name=site"`
	SiteID *string `queryParam:"style=form,explode=true,name=site_id"`
	Slug   *string `queryParam:"style=form,explode=true,name=slug"`
}

type DcimRackGroupsListRequest struct {
	QueryParams DcimRackGroupsListQueryParams
}

type DcimRackGroupsList200ApplicationJSON struct {
	Count    int64              `json:"count"`
	Next     *string            `json:"next,omitempty"`
	Previous *string            `json:"previous,omitempty"`
	Results  []shared.RackGroup `json:"results"`
}

type DcimRackGroupsListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DcimRackGroupsList200ApplicationJSONObject *DcimRackGroupsList200ApplicationJSON
}
