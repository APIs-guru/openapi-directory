package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPlatformsListQueryParams struct {
	Limit          *int64  `queryParam:"style=form,explode=true,name=limit"`
	Manufacturer   *string `queryParam:"style=form,explode=true,name=manufacturer"`
	ManufacturerID *string `queryParam:"style=form,explode=true,name=manufacturer_id"`
	Name           *string `queryParam:"style=form,explode=true,name=name"`
	Offset         *int64  `queryParam:"style=form,explode=true,name=offset"`
	Slug           *string `queryParam:"style=form,explode=true,name=slug"`
}

type DcimPlatformsListRequest struct {
	QueryParams DcimPlatformsListQueryParams
}

type DcimPlatformsList200ApplicationJSON struct {
	Count    int64             `json:"count"`
	Next     *string           `json:"next,omitempty"`
	Previous *string           `json:"previous,omitempty"`
	Results  []shared.Platform `json:"results"`
}

type DcimPlatformsListResponse struct {
	ContentType                               string
	StatusCode                                int64
	DcimPlatformsList200ApplicationJSONObject *DcimPlatformsList200ApplicationJSON
}
