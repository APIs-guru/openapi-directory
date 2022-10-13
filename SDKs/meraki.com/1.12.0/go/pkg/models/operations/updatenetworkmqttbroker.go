package operations

type UpdateNetworkMqttBrokerPathParams struct {
	MqttBrokerID string `pathParam:"style=simple,explode=false,name=mqttBrokerId"`
	NetworkID    string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkMqttBrokerRequestBody struct {
	Host *string `json:"host"`
	Name *string `json:"name"`
	Port *int64  `json:"port"`
}

type UpdateNetworkMqttBrokerRequest struct {
	PathParams UpdateNetworkMqttBrokerPathParams
	Request    *UpdateNetworkMqttBrokerRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkMqttBrokerResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	UpdateNetworkMqttBroker200ApplicationJSONObject map[string]interface{}
}
