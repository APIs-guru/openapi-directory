package shared

type SasPortalListDevicesResponse struct {
	Devices       []SasPortalDevice `json:"devices,omitempty"`
	NextPageToken *string           `json:"nextPageToken,omitempty"`
}
