package operations

import (
	"openapi/pkg/models/shared"
)

type GetCoverageParameters200ApplicationJSON struct {
	CoverageParameters []shared.CoverageParameterV1 `json:"coverage_parameters,omitempty"`
}

type GetCoverageParametersResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetCoverageParameters200ApplicationJSONObject *GetCoverageParameters200ApplicationJSON
}
