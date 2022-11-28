package shared

// GoogleAppsCardV1Image
// An image that is specified by a URL and can have an `onClick` action.
type GoogleAppsCardV1Image struct {
	AltText  *string                  `json:"altText,omitempty"`
	ImageURL *string                  `json:"imageUrl,omitempty"`
	OnClick  *GoogleAppsCardV1OnClick `json:"onClick,omitempty"`
}
