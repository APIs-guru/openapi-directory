package shared

type Contact struct {
	AcceptCommands  []Command `json:"acceptCommands"`
	AcceptTypes     []string  `json:"acceptTypes"`
	DisplayName     *string   `json:"displayName"`
	ID              *string   `json:"id"`
	ImageUrls       []string  `json:"imageUrls"`
	Kind            *string   `json:"kind"`
	PhoneNumber     *string   `json:"phoneNumber"`
	Priority        *int64    `json:"priority"`
	SharingFeatures []string  `json:"sharingFeatures"`
	Source          *string   `json:"source"`
	SpeakableName   *string   `json:"speakableName"`
	Type            *string   `json:"type"`
}
