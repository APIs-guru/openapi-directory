package operations

type DeleteNetworkMqttBrokerPathParams struct {
	MqttBrokerID string `pathParam:"style=simple,explode=false,name=mqttBrokerId"`
	NetworkID    string `pathParam:"style=simple,explode=false,name=networkId"`
}

type DeleteNetworkMqttBrokerRequest struct {
	PathParams DeleteNetworkMqttBrokerPathParams
}

type DeleteNetworkMqttBrokerResponse struct {
	ContentType string
	StatusCode  int64
}
