package shared

type Image struct {
	AspectRatio *float64 `json:"aspectRatio,omitempty"`
	ImageURL    *string  `json:"imageUrl,omitempty"`
	OnClick     *OnClick `json:"onClick,omitempty"`
}
