package operations

import (
	"openapi/pkg/models/shared"
)

type IpamRirsListQueryParams struct {
	Description     *string `queryParam:"style=form,explode=true,name=description"`
	DescriptionIc   *string `queryParam:"style=form,explode=true,name=description__ic"`
	DescriptionIe   *string `queryParam:"style=form,explode=true,name=description__ie"`
	DescriptionIew  *string `queryParam:"style=form,explode=true,name=description__iew"`
	DescriptionIsw  *string `queryParam:"style=form,explode=true,name=description__isw"`
	DescriptionN    *string `queryParam:"style=form,explode=true,name=description__n"`
	DescriptionNic  *string `queryParam:"style=form,explode=true,name=description__nic"`
	DescriptionNie  *string `queryParam:"style=form,explode=true,name=description__nie"`
	DescriptionNiew *string `queryParam:"style=form,explode=true,name=description__niew"`
	DescriptionNisw *string `queryParam:"style=form,explode=true,name=description__nisw"`
	ID              *string `queryParam:"style=form,explode=true,name=id"`
	IDGt            *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte           *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt            *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte           *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN             *string `queryParam:"style=form,explode=true,name=id__n"`
	IsPrivate       *string `queryParam:"style=form,explode=true,name=is_private"`
	Limit           *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name            *string `queryParam:"style=form,explode=true,name=name"`
	NameIc          *string `queryParam:"style=form,explode=true,name=name__ic"`
	NameIe          *string `queryParam:"style=form,explode=true,name=name__ie"`
	NameIew         *string `queryParam:"style=form,explode=true,name=name__iew"`
	NameIsw         *string `queryParam:"style=form,explode=true,name=name__isw"`
	NameN           *string `queryParam:"style=form,explode=true,name=name__n"`
	NameNic         *string `queryParam:"style=form,explode=true,name=name__nic"`
	NameNie         *string `queryParam:"style=form,explode=true,name=name__nie"`
	NameNiew        *string `queryParam:"style=form,explode=true,name=name__niew"`
	NameNisw        *string `queryParam:"style=form,explode=true,name=name__nisw"`
	Offset          *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q               *string `queryParam:"style=form,explode=true,name=q"`
	Slug            *string `queryParam:"style=form,explode=true,name=slug"`
	SlugIc          *string `queryParam:"style=form,explode=true,name=slug__ic"`
	SlugIe          *string `queryParam:"style=form,explode=true,name=slug__ie"`
	SlugIew         *string `queryParam:"style=form,explode=true,name=slug__iew"`
	SlugIsw         *string `queryParam:"style=form,explode=true,name=slug__isw"`
	SlugN           *string `queryParam:"style=form,explode=true,name=slug__n"`
	SlugNic         *string `queryParam:"style=form,explode=true,name=slug__nic"`
	SlugNie         *string `queryParam:"style=form,explode=true,name=slug__nie"`
	SlugNiew        *string `queryParam:"style=form,explode=true,name=slug__niew"`
	SlugNisw        *string `queryParam:"style=form,explode=true,name=slug__nisw"`
}

type IpamRirsList200ApplicationJSON struct {
	Count    int64        `json:"count"`
	Next     *string      `json:"next,omitempty"`
	Previous *string      `json:"previous,omitempty"`
	Results  []shared.Rir `json:"results"`
}

type IpamRirsListRequest struct {
	QueryParams IpamRirsListQueryParams
}

type IpamRirsListResponse struct {
	ContentType                          string
	StatusCode                           int64
	IpamRirsList200ApplicationJSONObject *IpamRirsList200ApplicationJSON
}
