package shared

type FeatureDescription struct {
	Headline *string `json:"headline"`
	Image    *Image  `json:"image"`
	Text     *string `json:"text"`
}
