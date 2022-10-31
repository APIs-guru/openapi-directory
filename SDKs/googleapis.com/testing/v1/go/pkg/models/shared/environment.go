package shared

type Environment struct {
	AndroidDevice *AndroidDevice `json:"androidDevice,omitempty"`
	IosDevice     *IosDevice     `json:"iosDevice,omitempty"`
}
