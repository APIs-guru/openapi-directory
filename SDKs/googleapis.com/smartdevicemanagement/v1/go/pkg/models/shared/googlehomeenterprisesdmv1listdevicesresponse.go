package shared

type GoogleHomeEnterpriseSdmV1ListDevicesResponse struct {
	Devices       []GoogleHomeEnterpriseSdmV1Device `json:"devices"`
	NextPageToken *string                           `json:"nextPageToken"`
}
