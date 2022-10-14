package shared

type GoogleAppsCardV1IconImageTypeEnum string

const (
	GoogleAppsCardV1IconImageTypeEnumSquare GoogleAppsCardV1IconImageTypeEnum = "SQUARE"
	GoogleAppsCardV1IconImageTypeEnumCircle GoogleAppsCardV1IconImageTypeEnum = "CIRCLE"
)

type GoogleAppsCardV1Icon struct {
	AltText   *string                            `json:"altText,omitempty"`
	IconURL   *string                            `json:"iconUrl,omitempty"`
	ImageType *GoogleAppsCardV1IconImageTypeEnum `json:"imageType,omitempty"`
	KnownIcon *string                            `json:"knownIcon,omitempty"`
}
