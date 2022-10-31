package shared

type LookupSelfDeviceUsersResponse struct {
	Customer      *string  `json:"customer,omitempty"`
	Names         []string `json:"names,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
