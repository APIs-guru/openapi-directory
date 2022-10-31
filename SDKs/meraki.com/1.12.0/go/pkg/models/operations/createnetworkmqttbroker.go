package operations

type CreateNetworkMqttBrokerPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkMqttBrokerRequestBody struct {
	Host string `json:"host"`
	Name string `json:"name"`
	Port int64  `json:"port"`
}

type CreateNetworkMqttBrokerRequest struct {
	PathParams CreateNetworkMqttBrokerPathParams
	Request    CreateNetworkMqttBrokerRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkMqttBrokerResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreateNetworkMqttBroker201ApplicationJSONObject map[string]interface{}
}
