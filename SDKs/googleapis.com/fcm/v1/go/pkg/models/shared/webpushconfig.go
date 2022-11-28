package shared

// WebpushConfig
// [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
type WebpushConfig struct {
	Data         map[string]string      `json:"data,omitempty"`
	FcmOptions   *WebpushFcmOptions     `json:"fcmOptions,omitempty"`
	Headers      map[string]string      `json:"headers,omitempty"`
	Notification map[string]interface{} `json:"notification,omitempty"`
}
