package operations

import (
	"openapi/pkg/models/shared"
)

type AquiferCodesSubtypesListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type AquiferCodesSubtypesList200ApplicationJSON struct {
	Count    int64                   `json:"count"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
	Results  []shared.AquiferSubtype `json:"results"`
}

type AquiferCodesSubtypesListRequest struct {
	QueryParams AquiferCodesSubtypesListQueryParams
}

type AquiferCodesSubtypesListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	AquiferCodesSubtypesList200ApplicationJSONObject *AquiferCodesSubtypesList200ApplicationJSON
}
