package shared




type CardHeaderImageStyleEnum string

const (
    CardHeaderImageStyleEnumImageStyleUnspecified CardHeaderImageStyleEnum = "IMAGE_STYLE_UNSPECIFIED"
CardHeaderImageStyleEnumImage CardHeaderImageStyleEnum = "IMAGE"
CardHeaderImageStyleEnumAvatar CardHeaderImageStyleEnum = "AVATAR"
)


type CardHeader struct {
    ImageStyle *CardHeaderImageStyleEnum `json:"imageStyle,omitempty"`
    ImageURL *string `json:"imageUrl,omitempty"`
    Subtitle *string `json:"subtitle,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

