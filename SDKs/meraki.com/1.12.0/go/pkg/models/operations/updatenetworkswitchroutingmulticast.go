package operations

type UpdateNetworkSwitchRoutingMulticastPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings struct {
	FloodUnknownMulticastTrafficEnabled *bool `json:"floodUnknownMulticastTrafficEnabled"`
	IgmpSnoopingEnabled                 *bool `json:"igmpSnoopingEnabled"`
}

type UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides struct {
	FloodUnknownMulticastTrafficEnabled bool     `json:"floodUnknownMulticastTrafficEnabled"`
	IgmpSnoopingEnabled                 bool     `json:"igmpSnoopingEnabled"`
	Stacks                              []string `json:"stacks"`
	SwitchProfiles                      []string `json:"switchProfiles"`
	Switches                            []string `json:"switches"`
}

type UpdateNetworkSwitchRoutingMulticastRequestBody struct {
	DefaultSettings *UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings `json:"defaultSettings"`
	Overrides       []UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides      `json:"overrides"`
}

type UpdateNetworkSwitchRoutingMulticastRequest struct {
	PathParams UpdateNetworkSwitchRoutingMulticastPathParams
	Request    *UpdateNetworkSwitchRoutingMulticastRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchRoutingMulticastResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	UpdateNetworkSwitchRoutingMulticast200ApplicationJSONObject map[string]interface{}
}
