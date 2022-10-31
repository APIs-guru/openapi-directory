package operations



type GetNetworkMqttBrokerPathParams struct {
    MqttBrokerID string `pathParam:"style=simple,explode=false,name=mqttBrokerId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkMqttBrokerRequest struct {
    PathParams GetNetworkMqttBrokerPathParams 
    
}

type GetNetworkMqttBrokerResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkMqttBroker200ApplicationJSONObject map[string]interface{} 
    
}

