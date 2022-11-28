package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceRolesListQueryParams struct {
	Color  *string `queryParam:"style=form,explode=true,name=color"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
	Slug   *string `queryParam:"style=form,explode=true,name=slug"`
	VMRole *string `queryParam:"style=form,explode=true,name=vm_role"`
}

type DcimDeviceRolesList200ApplicationJSON struct {
	Count    int64               `json:"count"`
	Next     *string             `json:"next,omitempty"`
	Previous *string             `json:"previous,omitempty"`
	Results  []shared.DeviceRole `json:"results"`
}

type DcimDeviceRolesListRequest struct {
	QueryParams DcimDeviceRolesListQueryParams
}

type DcimDeviceRolesListResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	DcimDeviceRolesList200ApplicationJSONObject *DcimDeviceRolesList200ApplicationJSON
}
