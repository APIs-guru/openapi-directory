package shared

type GoogleAppsCardV1Button struct {
	AltText  *string                  `json:"altText,omitempty"`
	Color    *Color                   `json:"color,omitempty"`
	Disabled *bool                    `json:"disabled,omitempty"`
	Icon     *GoogleAppsCardV1Icon    `json:"icon,omitempty"`
	OnClick  *GoogleAppsCardV1OnClick `json:"onClick,omitempty"`
	Text     *string                  `json:"text,omitempty"`
}
