package shared

type GoogleAppsCardV1CardHeaderImageTypeEnum string

const (
	GoogleAppsCardV1CardHeaderImageTypeEnumSquare GoogleAppsCardV1CardHeaderImageTypeEnum = "SQUARE"
	GoogleAppsCardV1CardHeaderImageTypeEnumCircle GoogleAppsCardV1CardHeaderImageTypeEnum = "CIRCLE"
)

type GoogleAppsCardV1CardHeader struct {
	ImageAltText *string                                  `json:"imageAltText"`
	ImageType    *GoogleAppsCardV1CardHeaderImageTypeEnum `json:"imageType"`
	ImageURL     *string                                  `json:"imageUrl"`
	Subtitle     *string                                  `json:"subtitle"`
	Title        *string                                  `json:"title"`
}
