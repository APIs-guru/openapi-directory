package operations

import (
	"openapi/pkg/models/shared"
)

type DcimVirtualChassisListQueryParams struct {
	Domain     *string `queryParam:"style=form,explode=true,name=domain"`
	DomainIc   *string `queryParam:"style=form,explode=true,name=domain__ic"`
	DomainIe   *string `queryParam:"style=form,explode=true,name=domain__ie"`
	DomainIew  *string `queryParam:"style=form,explode=true,name=domain__iew"`
	DomainIsw  *string `queryParam:"style=form,explode=true,name=domain__isw"`
	DomainN    *string `queryParam:"style=form,explode=true,name=domain__n"`
	DomainNic  *string `queryParam:"style=form,explode=true,name=domain__nic"`
	DomainNie  *string `queryParam:"style=form,explode=true,name=domain__nie"`
	DomainNiew *string `queryParam:"style=form,explode=true,name=domain__niew"`
	DomainNisw *string `queryParam:"style=form,explode=true,name=domain__nisw"`
	ID         *string `queryParam:"style=form,explode=true,name=id"`
	IDGt       *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte      *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt       *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte      *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN        *string `queryParam:"style=form,explode=true,name=id__n"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset     *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q          *string `queryParam:"style=form,explode=true,name=q"`
	Region     *string `queryParam:"style=form,explode=true,name=region"`
	RegionN    *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID   *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN  *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Site       *string `queryParam:"style=form,explode=true,name=site"`
	SiteN      *string `queryParam:"style=form,explode=true,name=site__n"`
	SiteID     *string `queryParam:"style=form,explode=true,name=site_id"`
	SiteIDN    *string `queryParam:"style=form,explode=true,name=site_id__n"`
	Tag        *string `queryParam:"style=form,explode=true,name=tag"`
	TagN       *string `queryParam:"style=form,explode=true,name=tag__n"`
	Tenant     *string `queryParam:"style=form,explode=true,name=tenant"`
	TenantN    *string `queryParam:"style=form,explode=true,name=tenant__n"`
	TenantID   *string `queryParam:"style=form,explode=true,name=tenant_id"`
	TenantIDN  *string `queryParam:"style=form,explode=true,name=tenant_id__n"`
}

type DcimVirtualChassisListRequest struct {
	QueryParams DcimVirtualChassisListQueryParams
}

type DcimVirtualChassisList200ApplicationJSON struct {
	Count    int64                   `json:"count"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
	Results  []shared.VirtualChassis `json:"results"`
}

type DcimVirtualChassisListResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DcimVirtualChassisList200ApplicationJSONObject *DcimVirtualChassisList200ApplicationJSON
}
