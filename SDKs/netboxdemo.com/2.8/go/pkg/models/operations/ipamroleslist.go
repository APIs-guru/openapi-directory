package operations

import (
	"openapi/pkg/models/shared"
)

type IpamRolesListQueryParams struct {
	ID       *string `queryParam:"style=form,explode=true,name=id"`
	IDGt     *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte    *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt     *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte    *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN      *string `queryParam:"style=form,explode=true,name=id__n"`
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	NameIc   *string `queryParam:"style=form,explode=true,name=name__ic"`
	NameIe   *string `queryParam:"style=form,explode=true,name=name__ie"`
	NameIew  *string `queryParam:"style=form,explode=true,name=name__iew"`
	NameIsw  *string `queryParam:"style=form,explode=true,name=name__isw"`
	NameN    *string `queryParam:"style=form,explode=true,name=name__n"`
	NameNic  *string `queryParam:"style=form,explode=true,name=name__nic"`
	NameNie  *string `queryParam:"style=form,explode=true,name=name__nie"`
	NameNiew *string `queryParam:"style=form,explode=true,name=name__niew"`
	NameNisw *string `queryParam:"style=form,explode=true,name=name__nisw"`
	Offset   *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q        *string `queryParam:"style=form,explode=true,name=q"`
	Slug     *string `queryParam:"style=form,explode=true,name=slug"`
	SlugIc   *string `queryParam:"style=form,explode=true,name=slug__ic"`
	SlugIe   *string `queryParam:"style=form,explode=true,name=slug__ie"`
	SlugIew  *string `queryParam:"style=form,explode=true,name=slug__iew"`
	SlugIsw  *string `queryParam:"style=form,explode=true,name=slug__isw"`
	SlugN    *string `queryParam:"style=form,explode=true,name=slug__n"`
	SlugNic  *string `queryParam:"style=form,explode=true,name=slug__nic"`
	SlugNie  *string `queryParam:"style=form,explode=true,name=slug__nie"`
	SlugNiew *string `queryParam:"style=form,explode=true,name=slug__niew"`
	SlugNisw *string `queryParam:"style=form,explode=true,name=slug__nisw"`
}

type IpamRolesListRequest struct {
	QueryParams IpamRolesListQueryParams
}

type IpamRolesList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next,omitempty"`
	Previous *string       `json:"previous,omitempty"`
	Results  []shared.Role `json:"results"`
}

type IpamRolesListResponse struct {
	ContentType                           string
	StatusCode                            int64
	IpamRolesList200ApplicationJSONObject *IpamRolesList200ApplicationJSON
}
