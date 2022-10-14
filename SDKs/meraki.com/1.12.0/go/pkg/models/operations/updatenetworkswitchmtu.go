package operations

type UpdateNetworkSwitchMtuPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchMtuRequestBodyOverrides struct {
	MtuSize        int64    `json:"mtuSize"`
	SwitchProfiles []string `json:"switchProfiles,omitempty"`
	Switches       []string `json:"switches,omitempty"`
}

type UpdateNetworkSwitchMtuRequestBody struct {
	DefaultMtuSize *int64                                       `json:"defaultMtuSize,omitempty"`
	Overrides      []UpdateNetworkSwitchMtuRequestBodyOverrides `json:"overrides,omitempty"`
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
