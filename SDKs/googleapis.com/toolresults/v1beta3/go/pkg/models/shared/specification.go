package shared

type Specification struct {
	AndroidTest *AndroidTest `json:"androidTest"`
	IosTest     *IosTest     `json:"iosTest"`
}
