package operations



type UpdateDeviceCameraSensePathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type UpdateDeviceCameraSenseRequestBodyAudioDetection struct {
    Enabled *bool `json:"enabled,omitempty"`
    
}

type UpdateDeviceCameraSenseRequestBody struct {
    AudioDetection *UpdateDeviceCameraSenseRequestBodyAudioDetection `json:"audioDetection,omitempty"`
    DetectionModelID *string `json:"detectionModelId,omitempty"`
    MqttBrokerID *string `json:"mqttBrokerId,omitempty"`
    SenseEnabled *bool `json:"senseEnabled,omitempty"`
    
}

type UpdateDeviceCameraSenseRequest struct {
    PathParams UpdateDeviceCameraSensePathParams 
    Request *UpdateDeviceCameraSenseRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDeviceCameraSenseResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateDeviceCameraSense200ApplicationJSONObject map[string]interface{} 
    
}

