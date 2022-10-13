package operations

import (
	"openapi/pkg/models/shared"
)

type GetCriticsResourceTypeJSONPathParams struct {
	ResourceType string `pathParam:"style=simple,explode=false,name=resource-type"`
}

type GetCriticsResourceTypeJSONRequest struct {
	PathParams GetCriticsResourceTypeJSONPathParams
}

type GetCriticsResourceTypeJSON200ApplicationJSON struct {
	Copyright  *string         `json:"copyright"`
	NumResults *int64          `json:"num_results"`
	Results    []shared.Critic `json:"results"`
	Status     *string         `json:"status"`
}

type GetCriticsResourceTypeJSONResponse struct {
	ContentType                                        string
	GetCriticsResourceTypeJSON200ApplicationJSONObject *GetCriticsResourceTypeJSON200ApplicationJSON
	StatusCode                                         int64
}
