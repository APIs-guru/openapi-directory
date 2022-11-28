package shared

// FeatureDescription
// A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
type FeatureDescription struct {
	Headline *string `json:"headline,omitempty"`
	Image    *Image  `json:"image,omitempty"`
	Text     *string `json:"text,omitempty"`
}
