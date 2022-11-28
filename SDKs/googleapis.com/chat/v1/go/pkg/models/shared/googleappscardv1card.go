package shared

type GoogleAppsCardV1CardDisplayStyleEnum string

const (
	GoogleAppsCardV1CardDisplayStyleEnumDisplayStyleUnspecified GoogleAppsCardV1CardDisplayStyleEnum = "DISPLAY_STYLE_UNSPECIFIED"
	GoogleAppsCardV1CardDisplayStyleEnumPeek                    GoogleAppsCardV1CardDisplayStyleEnum = "PEEK"
	GoogleAppsCardV1CardDisplayStyleEnumReplace                 GoogleAppsCardV1CardDisplayStyleEnum = "REPLACE"
)

// GoogleAppsCardV1Card
// Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. In Google Chat, cards appear in several places: - As stand-alone messages. - Accompanying a text message, just beneath the text message. - As a [dialog](https://developers.google.com/chat/how-tos/dialogs). The following example JSON creates a "contact card" that features: - A header with the contact's name, job title, avatar picture. - A section with the contact information, including formatted text. - Buttons that users can click to share the contact or see more or less info. ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) ``` { "cardsV2": [ { "cardId": "unique-card-id", "card": { "header": { "title": "Sasha", "subtitle": "Software Engineer", "imageUrl": "https://developers.google.com/chat/images/quickstart-app-avatar.png", "imageType": "CIRCLE", "imageAltText": "Avatar for Sasha", }, "sections": [ { "header": "Contact Info", "collapsible": true, "uncollapsibleWidgetsCount": 1, "widgets": [ { "decoratedText": { "startIcon": { "knownIcon": "EMAIL", }, "text": "sasha@example.com", } }, { "decoratedText": { "startIcon": { "knownIcon": "PERSON", }, "text": "Online", }, }, { "decoratedText": { "startIcon": { "knownIcon": "PHONE", }, "text": "+1 (555) 555-1234", } }, { "buttonList": { "buttons": [ { "text": "Share", "onClick": { "openLink": { "url": "https://example.com/share", } } }, { "text": "Edit", "onClick": { "action": { "function": "goToView", "parameters": [ { "key": "viewType", "value": "EDIT", } ], } } }, ], } }, ], }, ], }, } ], } ```
type GoogleAppsCardV1Card struct {
	CardActions    []GoogleAppsCardV1CardAction          `json:"cardActions,omitempty"`
	DisplayStyle   *GoogleAppsCardV1CardDisplayStyleEnum `json:"displayStyle,omitempty"`
	FixedFooter    *GoogleAppsCardV1CardFixedFooter      `json:"fixedFooter,omitempty"`
	Header         *GoogleAppsCardV1CardHeader           `json:"header,omitempty"`
	Name           *string                               `json:"name,omitempty"`
	PeekCardHeader *GoogleAppsCardV1CardHeader           `json:"peekCardHeader,omitempty"`
	Sections       []GoogleAppsCardV1Section             `json:"sections,omitempty"`
}
