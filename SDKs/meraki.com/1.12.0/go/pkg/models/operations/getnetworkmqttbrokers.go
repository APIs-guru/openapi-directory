package operations

type GetNetworkMqttBrokersPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkMqttBrokersRequest struct {
	PathParams GetNetworkMqttBrokersPathParams
}

type GetNetworkMqttBrokersResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetNetworkMqttBrokers200ApplicationJSONObject map[string]interface{}
}
