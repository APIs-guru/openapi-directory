package operations

import (
	"openapi/pkg/models/shared"
)

type AquiferCodesMaterialsListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type AquiferCodesMaterialsList200ApplicationJSON struct {
	Count    int64                    `json:"count"`
	Next     *string                  `json:"next,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Results  []shared.AquiferMaterial `json:"results"`
}

type AquiferCodesMaterialsListRequest struct {
	QueryParams AquiferCodesMaterialsListQueryParams
}

type AquiferCodesMaterialsListResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	AquiferCodesMaterialsList200ApplicationJSONObject *AquiferCodesMaterialsList200ApplicationJSON
}
