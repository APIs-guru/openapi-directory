package operations



type CreateNetworkSwitchLinkAggregationPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts struct {
    PortID string `json:"portId"`
    Serial string `json:"serial"`
    
}

type CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts struct {
    PortID string `json:"portId"`
    Profile string `json:"profile"`
    
}

type CreateNetworkSwitchLinkAggregationRequestBody struct {
    SwitchPorts []CreateNetworkSwitchLinkAggregationRequestBodySwitchPorts `json:"switchPorts,omitempty"`
    SwitchProfilePorts []CreateNetworkSwitchLinkAggregationRequestBodySwitchProfilePorts `json:"switchProfilePorts,omitempty"`
    
}

type CreateNetworkSwitchLinkAggregationRequest struct {
    PathParams CreateNetworkSwitchLinkAggregationPathParams 
    Request *CreateNetworkSwitchLinkAggregationRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkSwitchLinkAggregationResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkSwitchLinkAggregation201ApplicationJSONObject map[string]interface{} 
    
}

