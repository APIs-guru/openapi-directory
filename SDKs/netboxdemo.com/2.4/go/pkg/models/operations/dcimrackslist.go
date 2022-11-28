package operations

import (
	"openapi/pkg/models/shared"
)

type DcimRacksListQueryParams struct {
	DescUnits  *string  `queryParam:"style=form,explode=true,name=desc_units"`
	FacilityID *string  `queryParam:"style=form,explode=true,name=facility_id"`
	Group      *string  `queryParam:"style=form,explode=true,name=group"`
	GroupID    *string  `queryParam:"style=form,explode=true,name=group_id"`
	IDIn       *string  `queryParam:"style=form,explode=true,name=id__in"`
	Limit      *int64   `queryParam:"style=form,explode=true,name=limit"`
	Name       *string  `queryParam:"style=form,explode=true,name=name"`
	Offset     *int64   `queryParam:"style=form,explode=true,name=offset"`
	Q          *string  `queryParam:"style=form,explode=true,name=q"`
	Role       *string  `queryParam:"style=form,explode=true,name=role"`
	RoleID     *string  `queryParam:"style=form,explode=true,name=role_id"`
	Serial     *string  `queryParam:"style=form,explode=true,name=serial"`
	Site       *string  `queryParam:"style=form,explode=true,name=site"`
	SiteID     *string  `queryParam:"style=form,explode=true,name=site_id"`
	Tag        *string  `queryParam:"style=form,explode=true,name=tag"`
	Tenant     *string  `queryParam:"style=form,explode=true,name=tenant"`
	TenantID   *string  `queryParam:"style=form,explode=true,name=tenant_id"`
	Type       *string  `queryParam:"style=form,explode=true,name=type"`
	UHeight    *float64 `queryParam:"style=form,explode=true,name=u_height"`
	Width      *string  `queryParam:"style=form,explode=true,name=width"`
}

type DcimRacksList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next,omitempty"`
	Previous *string       `json:"previous,omitempty"`
	Results  []shared.Rack `json:"results"`
}

type DcimRacksListRequest struct {
	QueryParams DcimRacksListQueryParams
}

type DcimRacksListResponse struct {
	ContentType                           string
	StatusCode                            int64
	DcimRacksList200ApplicationJSONObject *DcimRacksList200ApplicationJSON
}
