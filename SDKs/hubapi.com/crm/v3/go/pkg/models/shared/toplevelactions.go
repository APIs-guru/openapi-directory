package shared

type TopLevelActions struct {
	Primary   *interface{}      `json:"primary,omitempty"`
	Secondary []interface{}     `json:"secondary"`
	Settings  *IFrameActionBody `json:"settings,omitempty"`
}
