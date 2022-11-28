package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantsListQueryParams struct {
	Created        *string `queryParam:"style=form,explode=true,name=created"`
	CreatedGte     *string `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte     *string `queryParam:"style=form,explode=true,name=created__lte"`
	Group          *string `queryParam:"style=form,explode=true,name=group"`
	GroupN         *string `queryParam:"style=form,explode=true,name=group__n"`
	GroupID        *string `queryParam:"style=form,explode=true,name=group_id"`
	GroupIDN       *string `queryParam:"style=form,explode=true,name=group_id__n"`
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
	Slug           *string `queryParam:"style=form,explode=true,name=slug"`
	SlugIc         *string `queryParam:"style=form,explode=true,name=slug__ic"`
	SlugIe         *string `queryParam:"style=form,explode=true,name=slug__ie"`
	SlugIew        *string `queryParam:"style=form,explode=true,name=slug__iew"`
	SlugIsw        *string `queryParam:"style=form,explode=true,name=slug__isw"`
	SlugN          *string `queryParam:"style=form,explode=true,name=slug__n"`
	SlugNic        *string `queryParam:"style=form,explode=true,name=slug__nic"`
	SlugNie        *string `queryParam:"style=form,explode=true,name=slug__nie"`
	SlugNiew       *string `queryParam:"style=form,explode=true,name=slug__niew"`
	SlugNisw       *string `queryParam:"style=form,explode=true,name=slug__nisw"`
	Tag            *string `queryParam:"style=form,explode=true,name=tag"`
	TagN           *string `queryParam:"style=form,explode=true,name=tag__n"`
}

type TenancyTenantsList200ApplicationJSON struct {
	Count    int64           `json:"count"`
	Next     *string         `json:"next,omitempty"`
	Previous *string         `json:"previous,omitempty"`
	Results  []shared.Tenant `json:"results"`
}

type TenancyTenantsListRequest struct {
	QueryParams TenancyTenantsListQueryParams
}

type TenancyTenantsListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	TenancyTenantsList200ApplicationJSONObject *TenancyTenantsList200ApplicationJSON
}
