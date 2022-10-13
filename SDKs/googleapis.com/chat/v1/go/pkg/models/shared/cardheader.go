package shared

type CardHeaderImageStyleEnum string

const (
	CardHeaderImageStyleEnumImageStyleUnspecified CardHeaderImageStyleEnum = "IMAGE_STYLE_UNSPECIFIED"
	CardHeaderImageStyleEnumImage                 CardHeaderImageStyleEnum = "IMAGE"
	CardHeaderImageStyleEnumAvatar                CardHeaderImageStyleEnum = "AVATAR"
)

type CardHeader struct {
	ImageStyle *CardHeaderImageStyleEnum `json:"imageStyle"`
	ImageURL   *string                   `json:"imageUrl"`
	Subtitle   *string                   `json:"subtitle"`
	Title      *string                   `json:"title"`
}
