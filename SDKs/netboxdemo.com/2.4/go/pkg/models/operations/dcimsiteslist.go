package operations

import (
	"openapi/pkg/models/shared"
)

type DcimSitesListQueryParams struct {
	Asn          *float64 `queryParam:"style=form,explode=true,name=asn"`
	ContactEmail *string  `queryParam:"style=form,explode=true,name=contact_email"`
	ContactName  *string  `queryParam:"style=form,explode=true,name=contact_name"`
	ContactPhone *string  `queryParam:"style=form,explode=true,name=contact_phone"`
	Facility     *string  `queryParam:"style=form,explode=true,name=facility"`
	IDIn         *string  `queryParam:"style=form,explode=true,name=id__in"`
	Limit        *int64   `queryParam:"style=form,explode=true,name=limit"`
	Name         *string  `queryParam:"style=form,explode=true,name=name"`
	Offset       *int64   `queryParam:"style=form,explode=true,name=offset"`
	Q            *string  `queryParam:"style=form,explode=true,name=q"`
	Region       *string  `queryParam:"style=form,explode=true,name=region"`
	RegionID     *string  `queryParam:"style=form,explode=true,name=region_id"`
	Slug         *string  `queryParam:"style=form,explode=true,name=slug"`
	Status       *string  `queryParam:"style=form,explode=true,name=status"`
	Tag          *string  `queryParam:"style=form,explode=true,name=tag"`
	Tenant       *string  `queryParam:"style=form,explode=true,name=tenant"`
	TenantID     *string  `queryParam:"style=form,explode=true,name=tenant_id"`
}

type DcimSitesListRequest struct {
	QueryParams DcimSitesListQueryParams
}

type DcimSitesList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next,omitempty"`
	Previous *string       `json:"previous,omitempty"`
	Results  []shared.Site `json:"results"`
}

type DcimSitesListResponse struct {
	ContentType                           string
	StatusCode                            int64
	DcimSitesList200ApplicationJSONObject *DcimSitesList200ApplicationJSON
}
