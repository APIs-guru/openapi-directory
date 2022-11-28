package operations

import (
	"openapi/pkg/models/shared"
)

type IpamRolesListQueryParams struct {
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
	Slug   *string `queryParam:"style=form,explode=true,name=slug"`
}

type IpamRolesList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next,omitempty"`
	Previous *string       `json:"previous,omitempty"`
	Results  []shared.Role `json:"results"`
}

type IpamRolesListRequest struct {
	QueryParams IpamRolesListQueryParams
}

type IpamRolesListResponse struct {
	ContentType                           string
	StatusCode                            int64
	IpamRolesList200ApplicationJSONObject *IpamRolesList200ApplicationJSON
}
