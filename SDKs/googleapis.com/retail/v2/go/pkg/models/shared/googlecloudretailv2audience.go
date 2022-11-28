package shared

// GoogleCloudRetailV2Audience
// An intended audience of the Product for whom it's sold.
type GoogleCloudRetailV2Audience struct {
	AgeGroups []string `json:"ageGroups,omitempty"`
	Genders   []string `json:"genders,omitempty"`
}
