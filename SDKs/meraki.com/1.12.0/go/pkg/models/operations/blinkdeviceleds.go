package operations

type BlinkDeviceLedsPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type BlinkDeviceLedsRequestBody struct {
	Duration *int64 `json:"duration,omitempty"`
	Duty     *int64 `json:"duty,omitempty"`
	Period   *int64 `json:"period,omitempty"`
}

type BlinkDeviceLedsRequest struct {
	PathParams BlinkDeviceLedsPathParams
	Request    *BlinkDeviceLedsRequestBody `request:"mediaType=application/json"`
}

type BlinkDeviceLedsResponse struct {
	ContentType                             string
	StatusCode                              int64
	BlinkDeviceLeds202ApplicationJSONObject map[string]interface{}
}
