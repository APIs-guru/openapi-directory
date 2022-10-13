package shared

type Message struct {
	Android      *AndroidConfig    `json:"android"`
	Apns         *ApnsConfig       `json:"apns"`
	Condition    *string           `json:"condition"`
	Data         map[string]string `json:"data"`
	FcmOptions   *FcmOptions       `json:"fcmOptions"`
	Name         *string           `json:"name"`
	Notification *Notification     `json:"notification"`
	Token        *string           `json:"token"`
	Topic        *string           `json:"topic"`
	Webpush      *WebpushConfig    `json:"webpush"`
}
