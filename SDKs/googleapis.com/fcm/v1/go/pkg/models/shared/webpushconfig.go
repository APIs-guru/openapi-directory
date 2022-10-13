package shared

type WebpushConfig struct {
	Data         map[string]string      `json:"data"`
	FcmOptions   *WebpushFcmOptions     `json:"fcmOptions"`
	Headers      map[string]string      `json:"headers"`
	Notification map[string]interface{} `json:"notification"`
}
