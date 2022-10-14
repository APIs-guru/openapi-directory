package shared

type Specification struct {
	AndroidTest *AndroidTest `json:"androidTest,omitempty"`
	IosTest     *IosTest     `json:"iosTest,omitempty"`
}
