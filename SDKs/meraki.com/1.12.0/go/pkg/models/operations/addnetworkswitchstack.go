package operations

type AddNetworkSwitchStackPathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type AddNetworkSwitchStackRequestBody struct {
	Serial string `json:"serial"`
}

type AddNetworkSwitchStackRequest struct {
	PathParams AddNetworkSwitchStackPathParams
	Request    AddNetworkSwitchStackRequestBody `request:"mediaType=application/json"`
}

type AddNetworkSwitchStackResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	AddNetworkSwitchStack200ApplicationJSONObject map[string]interface{}
}
