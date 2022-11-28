package operations

import (
	"openapi/pkg/models/shared"
)

type AquiferCodesWaterUseListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type AquiferCodesWaterUseList200ApplicationJSON struct {
	Count    int64             `json:"count"`
	Next     *string           `json:"next,omitempty"`
	Previous *string           `json:"previous,omitempty"`
	Results  []shared.WaterUse `json:"results"`
}

type AquiferCodesWaterUseListRequest struct {
	QueryParams AquiferCodesWaterUseListQueryParams
}

type AquiferCodesWaterUseListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	AquiferCodesWaterUseList200ApplicationJSONObject *AquiferCodesWaterUseList200ApplicationJSON
}
