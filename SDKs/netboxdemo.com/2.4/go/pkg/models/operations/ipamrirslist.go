package operations

import (
	"openapi/pkg/models/shared"
)

type IpamRirsListQueryParams struct {
	IDIn      *string `queryParam:"style=form,explode=true,name=id__in"`
	IsPrivate *string `queryParam:"style=form,explode=true,name=is_private"`
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name      *string `queryParam:"style=form,explode=true,name=name"`
	Offset    *int64  `queryParam:"style=form,explode=true,name=offset"`
	Slug      *string `queryParam:"style=form,explode=true,name=slug"`
}

type IpamRirsListRequest struct {
	QueryParams IpamRirsListQueryParams
}

type IpamRirsList200ApplicationJSON struct {
	Count    int64        `json:"count"`
	Next     *string      `json:"next,omitempty"`
	Previous *string      `json:"previous,omitempty"`
	Results  []shared.Rir `json:"results"`
}

type IpamRirsListResponse struct {
	ContentType                          string
	StatusCode                           int64
	IpamRirsList200ApplicationJSONObject *IpamRirsList200ApplicationJSON
}
