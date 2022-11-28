package shared

// GoogleCloudChannelV1ContactInfo
// Contact information for a customer account.
type GoogleCloudChannelV1ContactInfo struct {
	DisplayName *string `json:"displayName,omitempty"`
	Email       *string `json:"email,omitempty"`
	FirstName   *string `json:"firstName,omitempty"`
	LastName    *string `json:"lastName,omitempty"`
	Phone       *string `json:"phone,omitempty"`
	Title       *string `json:"title,omitempty"`
}

// GoogleCloudChannelV1ContactInfoInput
// Contact information for a customer account.
type GoogleCloudChannelV1ContactInfoInput struct {
	Email     *string `json:"email,omitempty"`
	FirstName *string `json:"firstName,omitempty"`
	LastName  *string `json:"lastName,omitempty"`
	Phone     *string `json:"phone,omitempty"`
	Title     *string `json:"title,omitempty"`
}
