package shared

type GoogleAppsCardV1IconImageTypeEnum string

const (
	GoogleAppsCardV1IconImageTypeEnumSquare GoogleAppsCardV1IconImageTypeEnum = "SQUARE"
	GoogleAppsCardV1IconImageTypeEnumCircle GoogleAppsCardV1IconImageTypeEnum = "CIRCLE"
)

type GoogleAppsCardV1Icon struct {
	AltText   *string                            `json:"altText"`
	IconURL   *string                            `json:"iconUrl"`
	ImageType *GoogleAppsCardV1IconImageTypeEnum `json:"imageType"`
	KnownIcon *string                            `json:"knownIcon"`
}
