package operations

import (
	"openapi/pkg/models/shared"
)

type CircuitsCircuitTypesListQueryParams struct {
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name   *string `queryParam:"style=form,explode=true,name=name"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
	Slug   *string `queryParam:"style=form,explode=true,name=slug"`
}

type CircuitsCircuitTypesListRequest struct {
	QueryParams CircuitsCircuitTypesListQueryParams
}

type CircuitsCircuitTypesList200ApplicationJSON struct {
	Count    int64                `json:"count"`
	Next     *string              `json:"next"`
	Previous *string              `json:"previous"`
	Results  []shared.CircuitType `json:"results"`
}

type CircuitsCircuitTypesListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	CircuitsCircuitTypesList200ApplicationJSONObject *CircuitsCircuitTypesList200ApplicationJSON
}
