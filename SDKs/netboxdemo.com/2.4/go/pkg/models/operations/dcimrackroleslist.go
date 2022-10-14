package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRackRolesListQueryParams struct {
	Color  *string `queryParam:"style=form,explode=true,name=color"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
	Slug   *string `queryParam:"style=form,explode=true,name=slug"`
}

type DcimRackRolesListRequest struct {
	QueryParams DcimRackRolesListQueryParams
}

type DcimRackRolesList200ApplicationJSON struct {
	Count    int64             `json:"count"`
	Next     *string           `json:"next,omitempty"`
	Previous *string           `json:"previous,omitempty"`
	Results  []shared.RackRole `json:"results"`
}

type DcimRackRolesListResponse struct {
	ContentType                               string
	StatusCode                                int64
	DcimRackRolesList200ApplicationJSONObject *DcimRackRolesList200ApplicationJSON
}
