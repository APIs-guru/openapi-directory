package shared

// CountryViewModel
// View model for country objects
type CountryViewModel struct {
	Code       *string `json:"code,omitempty"`
	Name       *string `json:"name,omitempty"`
	ObjectName *string `json:"objectName,omitempty"`
}
