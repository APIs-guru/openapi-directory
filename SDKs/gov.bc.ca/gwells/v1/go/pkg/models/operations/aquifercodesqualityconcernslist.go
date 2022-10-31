package operations

import (
	"openapi/pkg/models/shared"
)

type AquiferCodesQualityConcernsListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type AquiferCodesQualityConcernsListRequest struct {
	QueryParams AquiferCodesQualityConcernsListQueryParams
}

type AquiferCodesQualityConcernsList200ApplicationJSON struct {
	Count    int64                   `json:"count"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
	Results  []shared.QualityConcern `json:"results"`
}

type AquiferCodesQualityConcernsListResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	AquiferCodesQualityConcernsList200ApplicationJSONObject *AquiferCodesQualityConcernsList200ApplicationJSON
}
