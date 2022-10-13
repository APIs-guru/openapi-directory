package shared

type ApnsConfig struct {
	FcmOptions *ApnsFcmOptions        `json:"fcmOptions"`
	Headers    map[string]string      `json:"headers"`
	Payload    map[string]interface{} `json:"payload"`
}
