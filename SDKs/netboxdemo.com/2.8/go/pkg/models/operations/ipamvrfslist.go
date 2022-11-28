package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVrfsListQueryParams struct {
	Created        *string `queryParam:"style=form,explode=true,name=created"`
	CreatedGte     *string `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte     *string `queryParam:"style=form,explode=true,name=created__lte"`
	EnforceUnique  *string `queryParam:"style=form,explode=true,name=enforce_unique"`
	ID             *string `queryParam:"style=form,explode=true,name=id"`
	IDGt           *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte          *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt           *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte          *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN            *string `queryParam:"style=form,explode=true,name=id__n"`
	LastUpdated    *string `queryParam:"style=form,explode=true,name=last_updated"`
	LastUpdatedGte *string `queryParam:"style=form,explode=true,name=last_updated__gte"`
	LastUpdatedLte *string `queryParam:"style=form,explode=true,name=last_updated__lte"`
	Limit          *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name           *string `queryParam:"style=form,explode=true,name=name"`
	NameIc         *string `queryParam:"style=form,explode=true,name=name__ic"`
	NameIe         *string `queryParam:"style=form,explode=true,name=name__ie"`
	NameIew        *string `queryParam:"style=form,explode=true,name=name__iew"`
	NameIsw        *string `queryParam:"style=form,explode=true,name=name__isw"`
	NameN          *string `queryParam:"style=form,explode=true,name=name__n"`
	NameNic        *string `queryParam:"style=form,explode=true,name=name__nic"`
	NameNie        *string `queryParam:"style=form,explode=true,name=name__nie"`
	NameNiew       *string `queryParam:"style=form,explode=true,name=name__niew"`
	NameNisw       *string `queryParam:"style=form,explode=true,name=name__nisw"`
	Offset         *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q              *string `queryParam:"style=form,explode=true,name=q"`
	Rd             *string `queryParam:"style=form,explode=true,name=rd"`
	RdIc           *string `queryParam:"style=form,explode=true,name=rd__ic"`
	RdIe           *string `queryParam:"style=form,explode=true,name=rd__ie"`
	RdIew          *string `queryParam:"style=form,explode=true,name=rd__iew"`
	RdIsw          *string `queryParam:"style=form,explode=true,name=rd__isw"`
	RdN            *string `queryParam:"style=form,explode=true,name=rd__n"`
	RdNic          *string `queryParam:"style=form,explode=true,name=rd__nic"`
	RdNie          *string `queryParam:"style=form,explode=true,name=rd__nie"`
	RdNiew         *string `queryParam:"style=form,explode=true,name=rd__niew"`
	RdNisw         *string `queryParam:"style=form,explode=true,name=rd__nisw"`
	Tag            *string `queryParam:"style=form,explode=true,name=tag"`
	TagN           *string `queryParam:"style=form,explode=true,name=tag__n"`
	Tenant         *string `queryParam:"style=form,explode=true,name=tenant"`
	TenantN        *string `queryParam:"style=form,explode=true,name=tenant__n"`
	TenantGroup    *string `queryParam:"style=form,explode=true,name=tenant_group"`
	TenantGroupN   *string `queryParam:"style=form,explode=true,name=tenant_group__n"`
	TenantGroupID  *string `queryParam:"style=form,explode=true,name=tenant_group_id"`
	TenantGroupIDN *string `queryParam:"style=form,explode=true,name=tenant_group_id__n"`
	TenantID       *string `queryParam:"style=form,explode=true,name=tenant_id"`
	TenantIDN      *string `queryParam:"style=form,explode=true,name=tenant_id__n"`
}

type IpamVrfsList200ApplicationJSON struct {
	Count    int64        `json:"count"`
	Next     *string      `json:"next,omitempty"`
	Previous *string      `json:"previous,omitempty"`
	Results  []shared.Vrf `json:"results"`
}

type IpamVrfsListRequest struct {
	QueryParams IpamVrfsListQueryParams
}

type IpamVrfsListResponse struct {
	ContentType                          string
	StatusCode                           int64
	IpamVrfsList200ApplicationJSONObject *IpamVrfsList200ApplicationJSON
}
