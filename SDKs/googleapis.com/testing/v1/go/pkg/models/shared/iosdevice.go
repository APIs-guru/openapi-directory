package shared

type IosDevice struct {
	IosModelID   *string `json:"iosModelId"`
	IosVersionID *string `json:"iosVersionId"`
	Locale       *string `json:"locale"`
	Orientation  *string `json:"orientation"`
}
