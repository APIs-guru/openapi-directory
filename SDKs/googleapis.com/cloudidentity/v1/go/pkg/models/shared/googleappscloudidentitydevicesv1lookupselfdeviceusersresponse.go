package shared

type GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse struct {
	Customer      *string  `json:"customer,omitempty"`
	Names         []string `json:"names,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
