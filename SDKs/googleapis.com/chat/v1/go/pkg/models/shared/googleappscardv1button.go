package shared

// GoogleAppsCardV1Button
// A text, icon, or text + icon button that users can click. To make an image a clickable button, specify an Image (not an ImageComponent) and set an `onClick` action.
type GoogleAppsCardV1Button struct {
	AltText  *string                  `json:"altText,omitempty"`
	Color    *Color                   `json:"color,omitempty"`
	Disabled *bool                    `json:"disabled,omitempty"`
	Icon     *GoogleAppsCardV1Icon    `json:"icon,omitempty"`
	OnClick  *GoogleAppsCardV1OnClick `json:"onClick,omitempty"`
	Text     *string                  `json:"text,omitempty"`
}
