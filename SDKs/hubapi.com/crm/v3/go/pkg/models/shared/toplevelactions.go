package shared

type TopLevelActions struct {
	Primary   *interface{}      `json:"primary"`
	Secondary []interface{}     `json:"secondary"`
	Settings  *IFrameActionBody `json:"settings"`
}
