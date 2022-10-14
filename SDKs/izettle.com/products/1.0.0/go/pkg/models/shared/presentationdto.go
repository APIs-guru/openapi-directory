package shared

type PresentationDto struct {
	BackgroundColor *string `json:"backgroundColor,omitempty"`
	ImageURL        *string `json:"imageUrl,omitempty"`
	TextColor       *string `json:"textColor,omitempty"`
}
