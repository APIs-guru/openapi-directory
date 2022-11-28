package shared

// PromotionBodyLines
// Block object belonging to a promotion.
type PromotionBodyLines struct {
	HTMLTitle *string `json:"htmlTitle,omitempty"`
	Link      *string `json:"link,omitempty"`
	Title     *string `json:"title,omitempty"`
	URL       *string `json:"url,omitempty"`
}

// PromotionImage
// Image belonging to a promotion.
type PromotionImage struct {
	Height *int32  `json:"height,omitempty"`
	Source *string `json:"source,omitempty"`
	Width  *int32  `json:"width,omitempty"`
}

// Promotion
// Promotion result.
type Promotion struct {
	BodyLines   []PromotionBodyLines `json:"bodyLines,omitempty"`
	DisplayLink *string              `json:"displayLink,omitempty"`
	HTMLTitle   *string              `json:"htmlTitle,omitempty"`
	Image       *PromotionImage      `json:"image,omitempty"`
	Link        *string              `json:"link,omitempty"`
	Title       *string              `json:"title,omitempty"`
}
