package operations

import (
	"openapi/pkg/models/shared"
)

type AquiferCodesWaterUseListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type AquiferCodesWaterUseListRequest struct {
	QueryParams AquiferCodesWaterUseListQueryParams
}

type AquiferCodesWaterUseList200ApplicationJSON struct {
	Count    int64             `json:"count"`
	Next     *string           `json:"next"`
	Previous *string           `json:"previous"`
	Results  []shared.WaterUse `json:"results"`
}

type AquiferCodesWaterUseListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	AquiferCodesWaterUseList200ApplicationJSONObject *AquiferCodesWaterUseList200ApplicationJSON
}
