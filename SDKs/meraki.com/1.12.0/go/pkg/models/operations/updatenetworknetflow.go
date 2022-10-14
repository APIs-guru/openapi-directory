package operations

type UpdateNetworkNetflowPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkNetflowRequestBody struct {
	CollectorIP      *string `json:"collectorIp,omitempty"`
	CollectorPort    *int64  `json:"collectorPort,omitempty"`
	EtaDstPort       *int64  `json:"etaDstPort,omitempty"`
	EtaEnabled       *bool   `json:"etaEnabled,omitempty"`
	ReportingEnabled *bool   `json:"reportingEnabled,omitempty"`
}

type UpdateNetworkNetflowRequest struct {
	PathParams UpdateNetworkNetflowPathParams
	Request    *UpdateNetworkNetflowRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkNetflowResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	UpdateNetworkNetflow200ApplicationJSONObject map[string]interface{}
}
