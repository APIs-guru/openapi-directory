package shared

// LookupSelfDeviceUsersResponse
// Response containing resource names of the DeviceUsers associated with the caller's credentials.
type LookupSelfDeviceUsersResponse struct {
	Customer      *string  `json:"customer,omitempty"`
	Names         []string `json:"names,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
