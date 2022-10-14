package operations

import (
	"openapi/pkg/models/shared"
)

type DcimManufacturersListQueryParams struct {
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
	Slug   *string `queryParam:"style=form,explode=true,name=slug"`
}

type DcimManufacturersListRequest struct {
	QueryParams DcimManufacturersListQueryParams
}

type DcimManufacturersList200ApplicationJSON struct {
	Count    int64                 `json:"count"`
	Next     *string               `json:"next,omitempty"`
	Previous *string               `json:"previous,omitempty"`
	Results  []shared.Manufacturer `json:"results"`
}

type DcimManufacturersListResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	DcimManufacturersList200ApplicationJSONObject *DcimManufacturersList200ApplicationJSON
}
