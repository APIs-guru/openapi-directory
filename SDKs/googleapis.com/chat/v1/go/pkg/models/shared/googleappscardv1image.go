package shared

type GoogleAppsCardV1Image struct {
	AltText  *string                  `json:"altText"`
	ImageURL *string                  `json:"imageUrl"`
	OnClick  *GoogleAppsCardV1OnClick `json:"onClick"`
}
