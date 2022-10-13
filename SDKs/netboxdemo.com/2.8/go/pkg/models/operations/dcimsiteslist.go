package operations

import (
	"openapi/pkg/models/shared"
)

type DcimSitesListQueryParams struct {
	Asn              *string `queryParam:"style=form,explode=true,name=asn"`
	AsnGt            *string `queryParam:"style=form,explode=true,name=asn__gt"`
	AsnGte           *string `queryParam:"style=form,explode=true,name=asn__gte"`
	AsnLt            *string `queryParam:"style=form,explode=true,name=asn__lt"`
	AsnLte           *string `queryParam:"style=form,explode=true,name=asn__lte"`
	AsnN             *string `queryParam:"style=form,explode=true,name=asn__n"`
	ContactEmail     *string `queryParam:"style=form,explode=true,name=contact_email"`
	ContactEmailIc   *string `queryParam:"style=form,explode=true,name=contact_email__ic"`
	ContactEmailIe   *string `queryParam:"style=form,explode=true,name=contact_email__ie"`
	ContactEmailIew  *string `queryParam:"style=form,explode=true,name=contact_email__iew"`
	ContactEmailIsw  *string `queryParam:"style=form,explode=true,name=contact_email__isw"`
	ContactEmailN    *string `queryParam:"style=form,explode=true,name=contact_email__n"`
	ContactEmailNic  *string `queryParam:"style=form,explode=true,name=contact_email__nic"`
	ContactEmailNie  *string `queryParam:"style=form,explode=true,name=contact_email__nie"`
	ContactEmailNiew *string `queryParam:"style=form,explode=true,name=contact_email__niew"`
	ContactEmailNisw *string `queryParam:"style=form,explode=true,name=contact_email__nisw"`
	ContactName      *string `queryParam:"style=form,explode=true,name=contact_name"`
	ContactNameIc    *string `queryParam:"style=form,explode=true,name=contact_name__ic"`
	ContactNameIe    *string `queryParam:"style=form,explode=true,name=contact_name__ie"`
	ContactNameIew   *string `queryParam:"style=form,explode=true,name=contact_name__iew"`
	ContactNameIsw   *string `queryParam:"style=form,explode=true,name=contact_name__isw"`
	ContactNameN     *string `queryParam:"style=form,explode=true,name=contact_name__n"`
	ContactNameNic   *string `queryParam:"style=form,explode=true,name=contact_name__nic"`
	ContactNameNie   *string `queryParam:"style=form,explode=true,name=contact_name__nie"`
	ContactNameNiew  *string `queryParam:"style=form,explode=true,name=contact_name__niew"`
	ContactNameNisw  *string `queryParam:"style=form,explode=true,name=contact_name__nisw"`
	ContactPhone     *string `queryParam:"style=form,explode=true,name=contact_phone"`
	ContactPhoneIc   *string `queryParam:"style=form,explode=true,name=contact_phone__ic"`
	ContactPhoneIe   *string `queryParam:"style=form,explode=true,name=contact_phone__ie"`
	ContactPhoneIew  *string `queryParam:"style=form,explode=true,name=contact_phone__iew"`
	ContactPhoneIsw  *string `queryParam:"style=form,explode=true,name=contact_phone__isw"`
	ContactPhoneN    *string `queryParam:"style=form,explode=true,name=contact_phone__n"`
	ContactPhoneNic  *string `queryParam:"style=form,explode=true,name=contact_phone__nic"`
	ContactPhoneNie  *string `queryParam:"style=form,explode=true,name=contact_phone__nie"`
	ContactPhoneNiew *string `queryParam:"style=form,explode=true,name=contact_phone__niew"`
	ContactPhoneNisw *string `queryParam:"style=form,explode=true,name=contact_phone__nisw"`
	Created          *string `queryParam:"style=form,explode=true,name=created"`
	CreatedGte       *string `queryParam:"style=form,explode=true,name=created__gte"`
	CreatedLte       *string `queryParam:"style=form,explode=true,name=created__lte"`
	Facility         *string `queryParam:"style=form,explode=true,name=facility"`
	FacilityIc       *string `queryParam:"style=form,explode=true,name=facility__ic"`
	FacilityIe       *string `queryParam:"style=form,explode=true,name=facility__ie"`
	FacilityIew      *string `queryParam:"style=form,explode=true,name=facility__iew"`
	FacilityIsw      *string `queryParam:"style=form,explode=true,name=facility__isw"`
	FacilityN        *string `queryParam:"style=form,explode=true,name=facility__n"`
	FacilityNic      *string `queryParam:"style=form,explode=true,name=facility__nic"`
	FacilityNie      *string `queryParam:"style=form,explode=true,name=facility__nie"`
	FacilityNiew     *string `queryParam:"style=form,explode=true,name=facility__niew"`
	FacilityNisw     *string `queryParam:"style=form,explode=true,name=facility__nisw"`
	ID               *string `queryParam:"style=form,explode=true,name=id"`
	IDGt             *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte            *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt             *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte            *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN              *string `queryParam:"style=form,explode=true,name=id__n"`
	LastUpdated      *string `queryParam:"style=form,explode=true,name=last_updated"`
	LastUpdatedGte   *string `queryParam:"style=form,explode=true,name=last_updated__gte"`
	LastUpdatedLte   *string `queryParam:"style=form,explode=true,name=last_updated__lte"`
	Latitude         *string `queryParam:"style=form,explode=true,name=latitude"`
	LatitudeGt       *string `queryParam:"style=form,explode=true,name=latitude__gt"`
	LatitudeGte      *string `queryParam:"style=form,explode=true,name=latitude__gte"`
	LatitudeLt       *string `queryParam:"style=form,explode=true,name=latitude__lt"`
	LatitudeLte      *string `queryParam:"style=form,explode=true,name=latitude__lte"`
	LatitudeN        *string `queryParam:"style=form,explode=true,name=latitude__n"`
	Limit            *int64  `queryParam:"style=form,explode=true,name=limit"`
	Longitude        *string `queryParam:"style=form,explode=true,name=longitude"`
	LongitudeGt      *string `queryParam:"style=form,explode=true,name=longitude__gt"`
	LongitudeGte     *string `queryParam:"style=form,explode=true,name=longitude__gte"`
	LongitudeLt      *string `queryParam:"style=form,explode=true,name=longitude__lt"`
	LongitudeLte     *string `queryParam:"style=form,explode=true,name=longitude__lte"`
	LongitudeN       *string `queryParam:"style=form,explode=true,name=longitude__n"`
	Name             *string `queryParam:"style=form,explode=true,name=name"`
	NameIc           *string `queryParam:"style=form,explode=true,name=name__ic"`
	NameIe           *string `queryParam:"style=form,explode=true,name=name__ie"`
	NameIew          *string `queryParam:"style=form,explode=true,name=name__iew"`
	NameIsw          *string `queryParam:"style=form,explode=true,name=name__isw"`
	NameN            *string `queryParam:"style=form,explode=true,name=name__n"`
	NameNic          *string `queryParam:"style=form,explode=true,name=name__nic"`
	NameNie          *string `queryParam:"style=form,explode=true,name=name__nie"`
	NameNiew         *string `queryParam:"style=form,explode=true,name=name__niew"`
	NameNisw         *string `queryParam:"style=form,explode=true,name=name__nisw"`
	Offset           *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q                *string `queryParam:"style=form,explode=true,name=q"`
	Region           *string `queryParam:"style=form,explode=true,name=region"`
	RegionN          *string `queryParam:"style=form,explode=true,name=region__n"`
	RegionID         *string `queryParam:"style=form,explode=true,name=region_id"`
	RegionIDN        *string `queryParam:"style=form,explode=true,name=region_id__n"`
	Slug             *string `queryParam:"style=form,explode=true,name=slug"`
	SlugIc           *string `queryParam:"style=form,explode=true,name=slug__ic"`
	SlugIe           *string `queryParam:"style=form,explode=true,name=slug__ie"`
	SlugIew          *string `queryParam:"style=form,explode=true,name=slug__iew"`
	SlugIsw          *string `queryParam:"style=form,explode=true,name=slug__isw"`
	SlugN            *string `queryParam:"style=form,explode=true,name=slug__n"`
	SlugNic          *string `queryParam:"style=form,explode=true,name=slug__nic"`
	SlugNie          *string `queryParam:"style=form,explode=true,name=slug__nie"`
	SlugNiew         *string `queryParam:"style=form,explode=true,name=slug__niew"`
	SlugNisw         *string `queryParam:"style=form,explode=true,name=slug__nisw"`
	Status           *string `queryParam:"style=form,explode=true,name=status"`
	StatusN          *string `queryParam:"style=form,explode=true,name=status__n"`
	Tag              *string `queryParam:"style=form,explode=true,name=tag"`
	TagN             *string `queryParam:"style=form,explode=true,name=tag__n"`
	Tenant           *string `queryParam:"style=form,explode=true,name=tenant"`
	TenantN          *string `queryParam:"style=form,explode=true,name=tenant__n"`
	TenantGroup      *string `queryParam:"style=form,explode=true,name=tenant_group"`
	TenantGroupN     *string `queryParam:"style=form,explode=true,name=tenant_group__n"`
	TenantGroupID    *string `queryParam:"style=form,explode=true,name=tenant_group_id"`
	TenantGroupIDN   *string `queryParam:"style=form,explode=true,name=tenant_group_id__n"`
	TenantID         *string `queryParam:"style=form,explode=true,name=tenant_id"`
	TenantIDN        *string `queryParam:"style=form,explode=true,name=tenant_id__n"`
}

type DcimSitesListRequest struct {
	QueryParams DcimSitesListQueryParams
}

type DcimSitesList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next"`
	Previous *string       `json:"previous"`
	Results  []shared.Site `json:"results"`
}

type DcimSitesListResponse struct {
	ContentType                           string
	StatusCode                            int64
	DcimSitesList200ApplicationJSONObject *DcimSitesList200ApplicationJSON
}
