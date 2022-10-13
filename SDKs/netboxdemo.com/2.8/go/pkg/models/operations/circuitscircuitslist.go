package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitsListQueryParams struct {
	Cid            *string `queryParam:"style=form,explode=true,name=cid"`
	CidIc          *string `queryParam:"style=form,explode=true,name=cid__ic"`
	CidIe          *string `queryParam:"style=form,explode=true,name=cid__ie"`
	CidIew         *string `queryParam:"style=form,explode=true,name=cid__iew"`
	CidIsw         *string `queryParam:"style=form,explode=true,name=cid__isw"`
	CidN           *string `queryParam:"style=form,explode=true,name=cid__n"`
	CidNic         *string `queryParam:"style=form,explode=true,name=cid__nic"`
	CidNie         *string `queryParam:"style=form,explode=true,name=cid__nie"`
	CidNiew        *string `queryParam:"style=form,explode=true,name=cid__niew"`
	CidNisw        *string `queryParam:"style=form,explode=true,name=cid__nisw"`
	CommitRate     *string `queryParam:"style=form,explode=true,name=commit_rate"`
	CommitRateGt   *string `queryParam:"style=form,explode=true,name=commit_rate__gt"`
	CommitRateGte  *string `queryParam:"style=form,explode=true,name=commit_rate__gte"`
	CommitRateLt   *string `queryParam:"style=form,explode=true,name=commit_rate__lt"`
	CommitRateLte  *string `queryParam:"style=form,explode=true,name=commit_rate__lte"`
	CommitRateN    *string `queryParam:"style=form,explode=true,name=commit_rate__n"`
	Created        *string `queryParam:"style=form,explode=true,name=created"`
	CreatedGte     *string `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte     *string `queryParam:"style=form,explode=true,name=created__lte"`
	ID             *string `queryParam:"style=form,explode=true,name=id"`
	IDGt           *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte          *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt           *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte          *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN            *string `queryParam:"style=form,explode=true,name=id__n"`
	InstallDate    *string `queryParam:"style=form,explode=true,name=install_date"`
	InstallDateGt  *string `queryParam:"style=form,explode=true,name=install_date__gt"`
	InstallDateGte *string `queryParam:"style=form,explode=true,name=install_date__gte"`
	InstallDateLt  *string `queryParam:"style=form,explode=true,name=install_date__lt"`
	InstallDateLte *string `queryParam:"style=form,explode=true,name=install_date__lte"`
	InstallDateN   *string `queryParam:"style=form,explode=true,name=install_date__n"`
	LastUpdated    *string `queryParam:"style=form,explode=true,name=last_updated"`
	LastUpdatedGte *string `queryParam:"style=form,explode=true,name=last_updated__gte"`
	LastUpdatedLte *string `queryParam:"style=form,explode=true,name=last_updated__lte"`
	Limit          *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset         *int64  `queryParam:"style=form,explode=true,name=offset"`
	Provider       *string `queryParam:"style=form,explode=true,name=provider"`
	ProviderN      *string `queryParam:"style=form,explode=true,name=provider__n"`
	ProviderID     *string `queryParam:"style=form,explode=true,name=provider_id"`
	ProviderIDN    *string `queryParam:"style=form,explode=true,name=provider_id__n"`
	Q              *string `queryParam:"style=form,explode=true,name=q"`
	Region         *string `queryParam:"style=form,explode=true,name=region"`
	RegionN        *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID       *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN      *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Site           *string `queryParam:"style=form,explode=true,name=site"`
	SiteN          *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID         *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN        *string `queryParam:"style=form,explode=true,name=site_id__n"`
	Status         *string `queryParam:"style=form,explode=true,name=status"`
	StatusN        *string `queryParam:"style=form,explode=true,name=status__n"`
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
	Type           *string `queryParam:"style=form,explode=true,name=type"`
	TypeN          *string `queryParam:"style=form,explode=true,name=type__n"`
	TypeID         *string `queryParam:"style=form,explode=true,name=type_id"`
	TypeIDN        *string `queryParam:"style=form,explode=true,name=type_id__n"`
}

type CircuitsCircuitsListRequest struct {
	QueryParams CircuitsCircuitsListQueryParams
}

type CircuitsCircuitsList200ApplicationJSON struct {
	Count    int64            `json:"count"`
	Next     *string          `json:"next"`
	Previous *string          `json:"previous"`
	Results  []shared.Circuit `json:"results"`
}

type CircuitsCircuitsListResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	CircuitsCircuitsList200ApplicationJSONObject *CircuitsCircuitsList200ApplicationJSON
}
