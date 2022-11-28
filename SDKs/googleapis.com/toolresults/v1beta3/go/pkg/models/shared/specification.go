package shared

// Specification
// The details about how to run the execution.
type Specification struct {
	AndroidTest *AndroidTest `json:"androidTest,omitempty"`
	IosTest     *IosTest     `json:"iosTest,omitempty"`
}
