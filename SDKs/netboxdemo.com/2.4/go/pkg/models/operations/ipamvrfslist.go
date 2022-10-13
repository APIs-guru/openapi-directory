package operations

import (
	"openapi/pkg/models/shared"
)

type IpamVrfsListQueryParams struct {
	EnforceUnique *string `queryParam:"style=form,explode=true,name=enforce_unique"`
	IDIn          *string `queryParam:"style=form,explode=true,name=id__in"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name          *string `queryParam:"style=form,explode=true,name=name"`
	Offset        *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q             *string `queryParam:"style=form,explode=true,name=q"`
	Rd            *string `queryParam:"style=form,explode=true,name=rd"`
	Tag           *string `queryParam:"style=form,explode=true,name=tag"`
	Tenant        *string `queryParam:"style=form,explode=true,name=tenant"`
	TenantID      *string `queryParam:"style=form,explode=true,name=tenant_id"`
}

type IpamVrfsListRequest struct {
	QueryParams IpamVrfsListQueryParams
}

type IpamVrfsList200ApplicationJSON struct {
	Count    int64        `json:"count"`
	Next     *string      `json:"next"`
	Previous *string      `json:"previous"`
	Results  []shared.Vrf `json:"results"`
}

type IpamVrfsListResponse struct {
	ContentType                          string
	StatusCode                           int64
	IpamVrfsList200ApplicationJSONObject *IpamVrfsList200ApplicationJSON
}
