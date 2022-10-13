package operations

import (
	"openapi/pkg/models/shared"
)

type TenancyTenantsListQueryParams struct {
	Group   *string `queryParam:"style=form,explode=true,name=group"`
	GroupID *string `queryParam:"style=form,explode=true,name=group_id"`
	IDIn    *string `queryParam:"style=form,explode=true,name=id__in"`
	Limit   *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name    *string `queryParam:"style=form,explode=true,name=name"`
	Offset  *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q       *string `queryParam:"style=form,explode=true,name=q"`
	Tag     *string `queryParam:"style=form,explode=true,name=tag"`
}

type TenancyTenantsListRequest struct {
	QueryParams TenancyTenantsListQueryParams
}

type TenancyTenantsList200ApplicationJSON struct {
	Count    int64           `json:"count"`
	Next     *string         `json:"next"`
	Previous *string         `json:"previous"`
	Results  []shared.Tenant `json:"results"`
}

type TenancyTenantsListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	TenancyTenantsList200ApplicationJSONObject *TenancyTenantsList200ApplicationJSON
}
