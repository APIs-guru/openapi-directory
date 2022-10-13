package shared

type SasPortalListDevicesResponse struct {
	Devices       []SasPortalDevice `json:"devices"`
	NextPageToken *string           `json:"nextPageToken"`
}
