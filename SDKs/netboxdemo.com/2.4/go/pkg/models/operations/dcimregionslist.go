package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRegionsListQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	Offset   *int64  `queryParam:"style=form,explode=true,name=offset"`
	Parent   *string `queryParam:"style=form,explode=true,name=parent"`
	ParentID *string `queryParam:"style=form,explode=true,name=parent_id"`
	Q        *string `queryParam:"style=form,explode=true,name=q"`
	Slug     *string `queryParam:"style=form,explode=true,name=slug"`
}

type DcimRegionsListRequest struct {
	QueryParams DcimRegionsListQueryParams
}

type DcimRegionsList200ApplicationJSON struct {
	Count    int64           `json:"count"`
	Next     *string         `json:"next,omitempty"`
	Previous *string         `json:"previous,omitempty"`
	Results  []shared.Region `json:"results"`
}

type DcimRegionsListResponse struct {
	ContentType                             string
	StatusCode                              int64
	DcimRegionsList200ApplicationJSONObject *DcimRegionsList200ApplicationJSON
}
