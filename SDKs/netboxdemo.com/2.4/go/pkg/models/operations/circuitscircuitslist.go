package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitsListQueryParams struct {
	Cid         *string  `queryParam:"style=form,explode=true,name=cid"`
	CommitRate  *float64 `queryParam:"style=form,explode=true,name=commit_rate"`
	IDIn        *string  `queryParam:"style=form,explode=true,name=id__in"`
	InstallDate *string  `queryParam:"style=form,explode=true,name=install_date"`
	Limit       *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset      *int64   `queryParam:"style=form,explode=true,name=offset"`
	Provider    *string  `queryParam:"style=form,explode=true,name=provider"`
	ProviderID  *string  `queryParam:"style=form,explode=true,name=provider_id"`
	Q           *string  `queryParam:"style=form,explode=true,name=q"`
	Site        *string  `queryParam:"style=form,explode=true,name=site"`
	SiteID      *string  `queryParam:"style=form,explode=true,name=site_id"`
	Status      *string  `queryParam:"style=form,explode=true,name=status"`
	Tag         *string  `queryParam:"style=form,explode=true,name=tag"`
	Tenant      *string  `queryParam:"style=form,explode=true,name=tenant"`
	TenantID    *string  `queryParam:"style=form,explode=true,name=tenant_id"`
	Type        *string  `queryParam:"style=form,explode=true,name=type"`
	TypeID      *string  `queryParam:"style=form,explode=true,name=type_id"`
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
