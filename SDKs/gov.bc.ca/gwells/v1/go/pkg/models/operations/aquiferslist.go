package operations

import (
	"openapi/pkg/models/shared"
)

type AquifersListQueryParams struct {
	AquiferID *float64 `queryParam:"style=form,explode=true,name=aquifer_id"`
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int64   `queryParam:"style=form,explode=true,name=offset"`
	Ordering  *string  `queryParam:"style=form,explode=true,name=ordering"`
	Search    *string  `queryParam:"style=form,explode=true,name=search"`
}

type AquifersList200ApplicationJSON struct {
	Count    int64            `json:"count"`
	Next     *string          `json:"next,omitempty"`
	Previous *string          `json:"previous,omitempty"`
	Results  []shared.Aquifer `json:"results"`
}

type AquifersListRequest struct {
	QueryParams AquifersListQueryParams
}

type AquifersListResponse struct {
	ContentType                          string
	StatusCode                           int64
	AquifersList200ApplicationJSONObject *AquifersList200ApplicationJSON
}
