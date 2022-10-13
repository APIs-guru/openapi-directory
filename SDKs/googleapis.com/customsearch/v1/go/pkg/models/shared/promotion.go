package shared

type PromotionBodyLines struct {
	HTMLTitle *string `json:"htmlTitle"`
	Link      *string `json:"link"`
	Title     *string `json:"title"`
	URL       *string `json:"url"`
}

type PromotionImage struct {
	Height *int32  `json:"height"`
	Source *string `json:"source"`
	Width  *int32  `json:"width"`
}

type Promotion struct {
	BodyLines   []PromotionBodyLines `json:"bodyLines"`
	DisplayLink *string              `json:"displayLink"`
	HTMLTitle   *string              `json:"htmlTitle"`
	Image       *PromotionImage      `json:"image"`
	Link        *string              `json:"link"`
	Title       *string              `json:"title"`
}
