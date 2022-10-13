package shared

type Image struct {
	AspectRatio *float64 `json:"aspectRatio"`
	ImageURL    *string  `json:"imageUrl"`
	OnClick     *OnClick `json:"onClick"`
}
