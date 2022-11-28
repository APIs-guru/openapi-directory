package shared

// MobileDeviceIDList
// Wrapper message for a list of mobile device IDs defining Customer Match audience members.
type MobileDeviceIDList struct {
	MobileDeviceIds []string `json:"mobileDeviceIds,omitempty"`
}
