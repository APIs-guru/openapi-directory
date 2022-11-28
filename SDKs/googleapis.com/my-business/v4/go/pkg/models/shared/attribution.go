package shared

// Attribution
// Attribution information for customer media items, such as the contributor's name and profile picture.
type Attribution struct {
	ProfileName     *string `json:"profileName,omitempty"`
	ProfilePhotoURL *string `json:"profilePhotoUrl,omitempty"`
	ProfileURL      *string `json:"profileUrl,omitempty"`
	TakedownURL     *string `json:"takedownUrl,omitempty"`
}
