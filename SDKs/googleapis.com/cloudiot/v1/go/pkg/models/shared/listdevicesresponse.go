package shared

type ListDevicesResponse struct {
	Devices       []Device `json:"devices"`
	NextPageToken *string  `json:"nextPageToken"`
}
