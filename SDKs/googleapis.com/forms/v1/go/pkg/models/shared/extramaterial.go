package shared

// ExtraMaterial
// Supplementary material to the feedback.
type ExtraMaterial struct {
	Link  *TextLink  `json:"link,omitempty"`
	Video *VideoLink `json:"video,omitempty"`
}
