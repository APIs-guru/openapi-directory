package shared

type GoogleAppsCardV1IconImageTypeEnum string

const (
	GoogleAppsCardV1IconImageTypeEnumSquare GoogleAppsCardV1IconImageTypeEnum = "SQUARE"
	GoogleAppsCardV1IconImageTypeEnumCircle GoogleAppsCardV1IconImageTypeEnum = "CIRCLE"
)

// GoogleAppsCardV1Icon
// An icon displayed in a widget on a card. Supports [standard](https://developers.google.com/chat/api/guides/message-formats/cards) and [custom](https://developers.google.com/chat/api/guides/message-formats/cards#customicons) icons.
type GoogleAppsCardV1Icon struct {
	AltText   *string                            `json:"altText,omitempty"`
	IconURL   *string                            `json:"iconUrl,omitempty"`
	ImageType *GoogleAppsCardV1IconImageTypeEnum `json:"imageType,omitempty"`
	KnownIcon *string                            `json:"knownIcon,omitempty"`
}
