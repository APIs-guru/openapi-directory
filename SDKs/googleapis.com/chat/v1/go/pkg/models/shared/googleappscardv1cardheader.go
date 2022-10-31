package shared




type GoogleAppsCardV1CardHeaderImageTypeEnum string

const (
    GoogleAppsCardV1CardHeaderImageTypeEnumSquare GoogleAppsCardV1CardHeaderImageTypeEnum = "SQUARE"
GoogleAppsCardV1CardHeaderImageTypeEnumCircle GoogleAppsCardV1CardHeaderImageTypeEnum = "CIRCLE"
)


type GoogleAppsCardV1CardHeader struct {
    ImageAltText *string `json:"imageAltText,omitempty"`
    ImageType *GoogleAppsCardV1CardHeaderImageTypeEnum `json:"imageType,omitempty"`
    ImageURL *string `json:"imageUrl,omitempty"`
    Subtitle *string `json:"subtitle,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

