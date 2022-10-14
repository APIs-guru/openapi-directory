package operations

type UpdateNetworkSwitchLinkAggregationPathParams struct {
	LinkAggregationID string `pathParam:"style=simple,explode=false,name=linkAggregationId"`
	NetworkID         string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts struct {
	PortID string `json:"portId"`
	Serial string `json:"serial"`
}

type UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts struct {
	PortID  string `json:"portId"`
	Profile string `json:"profile"`
}

type UpdateNetworkSwitchLinkAggregationRequestBody struct {
	SwitchPorts        []UpdateNetworkSwitchLinkAggregationRequestBodySwitchPorts        `json:"switchPorts,omitempty"`
	SwitchProfilePorts []UpdateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts `json:"switchProfilePorts,omitempty"`
}

type UpdateNetworkSwitchLinkAggregationRequest struct {
	PathParams UpdateNetworkSwitchLinkAggregationPathParams
	Request    *UpdateNetworkSwitchLinkAggregationRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchLinkAggregationResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	UpdateNetworkSwitchLinkAggregation200ApplicationJSONObject map[string]interface{}
}
