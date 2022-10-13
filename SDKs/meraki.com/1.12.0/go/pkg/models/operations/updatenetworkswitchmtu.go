package operations

type UpdateNetworkSwitchMtuPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchMtuRequestBodyOverrides struct {
	MtuSize        int64    `json:"mtuSize"`
	SwitchProfiles []string `json:"switchProfiles"`
	Switches       []string `json:"switches"`
}

type UpdateNetworkSwitchMtuRequestBody struct {
	DefaultMtuSize *int64                                       `json:"defaultMtuSize"`
	Overrides      []UpdateNetworkSwitchMtuRequestBodyOverrides `json:"overrides"`
}

type UpdateNetworkSwitchMtuRequest struct {
	PathParams UpdateNetworkSwitchMtuPathParams
	Request    *UpdateNetworkSwitchMtuRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchMtuResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	UpdateNetworkSwitchMtu200ApplicationJSONObject map[string]interface{}
}
