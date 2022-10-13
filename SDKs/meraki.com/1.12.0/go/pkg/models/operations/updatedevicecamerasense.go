package operations

type UpdateDeviceCameraSensePathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceCameraSenseRequestBodyAudioDetection struct {
	Enabled *bool `json:"enabled"`
}

type UpdateDeviceCameraSenseRequestBody struct {
	AudioDetection   *UpdateDeviceCameraSenseRequestBodyAudioDetection `json:"audioDetection"`
	DetectionModelID *string                                           `json:"detectionModelId"`
	MqttBrokerID     *string                                           `json:"mqttBrokerId"`
	SenseEnabled     *bool                                             `json:"senseEnabled"`
}

type UpdateDeviceCameraSenseRequest struct {
	PathParams UpdateDeviceCameraSensePathParams
	Request    *UpdateDeviceCameraSenseRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceCameraSenseResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	UpdateDeviceCameraSense200ApplicationJSONObject map[string]interface{}
}
