package operations

import (
	"openapi/pkg/models/shared"
)

type GetRiskParameters200ApplicationJSON struct {
	RiskParameters []shared.RiskParameterV1 `json:"risk_parameters,omitempty"`
}

type GetRiskParametersResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetRiskParameters200ApplicationJSONObject *GetRiskParameters200ApplicationJSON
}
