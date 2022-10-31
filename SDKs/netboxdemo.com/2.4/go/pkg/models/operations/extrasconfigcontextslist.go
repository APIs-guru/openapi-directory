package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasConfigContextsListQueryParams struct {
	IsActive      *string `queryParam:"style=form,explode=true,name=is_active"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name          *string `queryParam:"style=form,explode=true,name=name"`
	Offset        *int64  `queryParam:"style=form,explode=true,name=offset"`
	Platform      *string `queryParam:"style=form,explode=true,name=platform"`
	PlatformID    *string `queryParam:"style=form,explode=true,name=platform_id"`
	Q             *string `queryParam:"style=form,explode=true,name=q"`
	Region        *string `queryParam:"style=form,explode=true,name=region"`
	RegionID      *string `queryParam:"style=form,explode=true,name=region_id"`
	Role          *string `queryParam:"style=form,explode=true,name=role"`
	RoleID        *string `queryParam:"style=form,explode=true,name=role_id"`
	Site          *string `queryParam:"style=form,explode=true,name=site"`
	SiteID        *string `queryParam:"style=form,explode=true,name=site_id"`
	Tenant        *string `queryParam:"style=form,explode=true,name=tenant"`
	TenantGroup   *string `queryParam:"style=form,explode=true,name=tenant_group"`
	TenantGroupID *string `queryParam:"style=form,explode=true,name=tenant_group_id"`
	TenantID      *string `queryParam:"style=form,explode=true,name=tenant_id"`
}

type ExtrasConfigContextsListRequest struct {
	QueryParams ExtrasConfigContextsListQueryParams
}

type ExtrasConfigContextsList200ApplicationJSON struct {
	Count    int64                  `json:"count"`
	Next     *string                `json:"next,omitempty"`
	Previous *string                `json:"previous,omitempty"`
	Results  []shared.ConfigContext `json:"results"`
}

type ExtrasConfigContextsListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ExtrasConfigContextsList200ApplicationJSONObject *ExtrasConfigContextsList200ApplicationJSON
}
