package shared

// Message
// Message to send by Firebase Cloud Messaging Service.
type Message struct {
	Android      *AndroidConfig    `json:"android,omitempty"`
	Apns         *ApnsConfig       `json:"apns,omitempty"`
	Condition    *string           `json:"condition,omitempty"`
	Data         map[string]string `json:"data,omitempty"`
	FcmOptions   *FcmOptions       `json:"fcmOptions,omitempty"`
	Name         *string           `json:"name,omitempty"`
	Notification *Notification     `json:"notification,omitempty"`
	Token        *string           `json:"token,omitempty"`
	Topic        *string           `json:"topic,omitempty"`
	Webpush      *WebpushConfig    `json:"webpush,omitempty"`
}
