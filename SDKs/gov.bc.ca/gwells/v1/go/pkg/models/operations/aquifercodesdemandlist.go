package operations

import (
	"openapi/pkg/models/shared"
)

type AquiferCodesDemandListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type AquiferCodesDemandList200ApplicationJSON struct {
	Count    int64                  `json:"count"`
	Next     *string                `json:"next,omitempty"`
	Previous *string                `json:"previous,omitempty"`
	Results  []shared.AquiferDemand `json:"results"`
}

type AquiferCodesDemandListRequest struct {
	QueryParams AquiferCodesDemandListQueryParams
}

type AquiferCodesDemandListResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	AquiferCodesDemandList200ApplicationJSONObject *AquiferCodesDemandList200ApplicationJSON
}
