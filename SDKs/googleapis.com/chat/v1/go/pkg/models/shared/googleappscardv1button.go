package shared

type GoogleAppsCardV1Button struct {
	AltText  *string                  `json:"altText"`
	Color    *Color                   `json:"color"`
	Disabled *bool                    `json:"disabled"`
	Icon     *GoogleAppsCardV1Icon    `json:"icon"`
	OnClick  *GoogleAppsCardV1OnClick `json:"onClick"`
	Text     *string                  `json:"text"`
}
