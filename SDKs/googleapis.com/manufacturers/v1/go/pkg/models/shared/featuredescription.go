package shared

type FeatureDescription struct {
	Headline *string `json:"headline,omitempty"`
	Image    *Image  `json:"image,omitempty"`
	Text     *string `json:"text,omitempty"`
}
