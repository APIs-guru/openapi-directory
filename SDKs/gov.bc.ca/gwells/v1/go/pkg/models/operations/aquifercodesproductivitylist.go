package operations

import (
	"openapi/pkg/models/shared"
)

type AquiferCodesProductivityListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type AquiferCodesProductivityListRequest struct {
	QueryParams AquiferCodesProductivityListQueryParams
}

type AquiferCodesProductivityList200ApplicationJSON struct {
	Count    int64                        `json:"count"`
	Next     *string                      `json:"next,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
	Results  []shared.AquiferProductivity `json:"results"`
}

type AquiferCodesProductivityListResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	AquiferCodesProductivityList200ApplicationJSONObject *AquiferCodesProductivityList200ApplicationJSON
}
