package shared

type Environment struct {
	AndroidDevice *AndroidDevice `json:"androidDevice"`
	IosDevice     *IosDevice     `json:"iosDevice"`
}
