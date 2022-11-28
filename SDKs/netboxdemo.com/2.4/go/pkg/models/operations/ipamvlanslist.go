package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVlansListQueryParams struct {
	Group    *string  `queryParam:"style=form,explode=true,name=group"`
	GroupID  *string  `queryParam:"style=form,explode=true,name=group_id"`
	IDIn     *string  `queryParam:"style=form,explode=true,name=id__in"`
	Limit    *int64   `queryParam:"style=form,explode=true,name=limit"`
	Name     *string  `queryParam:"style=form,explode=true,name=name"`
	Offset   *int64   `queryParam:"style=form,explode=true,name=offset"`
	Q        *string  `queryParam:"style=form,explode=true,name=q"`
	Role     *string  `queryParam:"style=form,explode=true,name=role"`
	RoleID   *string  `queryParam:"style=form,explode=true,name=role_id"`
	Site     *string  `queryParam:"style=form,explode=true,name=site"`
	SiteID   *string  `queryParam:"style=form,explode=true,name=site_id"`
	Status   *string  `queryParam:"style=form,explode=true,name=status"`
	Tag      *string  `queryParam:"style=form,explode=true,name=tag"`
	Tenant   *string  `queryParam:"style=form,explode=true,name=tenant"`
	TenantID *string  `queryParam:"style=form,explode=true,name=tenant_id"`
	Vid      *float64 `queryParam:"style=form,explode=true,name=vid"`
}

type IpamVlansList200ApplicationJSON struct {
	Count    int64         `json:"count"`
	Next     *string       `json:"next,omitempty"`
	Previous *string       `json:"previous,omitempty"`
	Results  []shared.Vlan `json:"results"`
}

type IpamVlansListRequest struct {
	QueryParams IpamVlansListQueryParams
}

type IpamVlansListResponse struct {
	ContentType                           string
	StatusCode                            int64
	IpamVlansList200ApplicationJSONObject *IpamVlansList200ApplicationJSON
}
