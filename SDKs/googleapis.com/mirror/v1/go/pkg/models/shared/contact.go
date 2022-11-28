package shared

// Contact
// A person or group that can be used as a creator or a contact.
type Contact struct {
	AcceptCommands  []Command `json:"acceptCommands,omitempty"`
	AcceptTypes     []string  `json:"acceptTypes,omitempty"`
	DisplayName     *string   `json:"displayName,omitempty"`
	ID              *string   `json:"id,omitempty"`
	ImageUrls       []string  `json:"imageUrls,omitempty"`
	Kind            *string   `json:"kind,omitempty"`
	PhoneNumber     *string   `json:"phoneNumber,omitempty"`
	Priority        *int64    `json:"priority,omitempty"`
	SharingFeatures []string  `json:"sharingFeatures,omitempty"`
	Source          *string   `json:"source,omitempty"`
	SpeakableName   *string   `json:"speakableName,omitempty"`
	Type            *string   `json:"type,omitempty"`
}
