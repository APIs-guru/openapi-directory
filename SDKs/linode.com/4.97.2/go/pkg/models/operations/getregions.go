package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegions200ApplicationJSON struct {
	Data    []shared.Region `json:"data"`
	Page    *int64          `json:"page"`
	Pages   *int64          `json:"pages"`
	Results *int64          `json:"results"`
}

type GetRegionsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetRegionsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetRegions200ApplicationJSONObject     *GetRegions200ApplicationJSON
	GetRegionsDefaultApplicationJSONObject *GetRegionsDefaultApplicationJSON
}
