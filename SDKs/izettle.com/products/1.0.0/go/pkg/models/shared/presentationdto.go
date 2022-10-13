package shared

type PresentationDto struct {
	BackgroundColor *string `json:"backgroundColor"`
	ImageURL        *string `json:"imageUrl"`
	TextColor       *string `json:"textColor"`
}
