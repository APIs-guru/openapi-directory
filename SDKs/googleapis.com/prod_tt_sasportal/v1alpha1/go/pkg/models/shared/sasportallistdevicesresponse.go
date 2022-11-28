package shared

// SasPortalListDevicesResponse
// Response for ListDevices.
type SasPortalListDevicesResponse struct {
	Devices       []SasPortalDevice `json:"devices,omitempty"`
	NextPageToken *string           `json:"nextPageToken,omitempty"`
}
