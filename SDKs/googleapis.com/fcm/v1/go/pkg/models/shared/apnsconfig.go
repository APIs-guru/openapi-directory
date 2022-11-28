package shared

// ApnsConfig
// [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
type ApnsConfig struct {
	FcmOptions *ApnsFcmOptions        `json:"fcmOptions,omitempty"`
	Headers    map[string]string      `json:"headers,omitempty"`
	Payload    map[string]interface{} `json:"payload,omitempty"`
}
