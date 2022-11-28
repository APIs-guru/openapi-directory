package shared

// Environment
// The environment in which the test is run.
type Environment struct {
	AndroidDevice *AndroidDevice `json:"androidDevice,omitempty"`
	IosDevice     *IosDevice     `json:"iosDevice,omitempty"`
}
