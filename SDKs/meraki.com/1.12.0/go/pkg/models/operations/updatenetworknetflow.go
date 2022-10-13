package operations

type UpdateNetworkNetflowPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkNetflowRequestBody struct {
	CollectorIP      *string `json:"collectorIp"`
	CollectorPort    *int64  `json:"collectorPort"`
	EtaDstPort       *int64  `json:"etaDstPort"`
	EtaEnabled       *bool   `json:"etaEnabled"`
	ReportingEnabled *bool   `json:"reportingEnabled"`
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
