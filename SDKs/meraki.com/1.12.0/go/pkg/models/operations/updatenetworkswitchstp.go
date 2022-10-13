package operations

type UpdateNetworkSwitchStpPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchStpRequestBodyStpBridgePriority struct {
	Stacks         []string `json:"stacks"`
	StpPriority    int64    `json:"stpPriority"`
	SwitchProfiles []string `json:"switchProfiles"`
	Switches       []string `json:"switches"`
}

type UpdateNetworkSwitchStpRequestBody struct {
	RstpEnabled       *bool                                                `json:"rstpEnabled"`
	StpBridgePriority []UpdateNetworkSwitchStpRequestBodyStpBridgePriority `json:"stpBridgePriority"`
}

type UpdateNetworkSwitchStpRequest struct {
	PathParams UpdateNetworkSwitchStpPathParams
	Request    *UpdateNetworkSwitchStpRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchStpResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	UpdateNetworkSwitchStp200ApplicationJSONObject map[string]interface{}
}
