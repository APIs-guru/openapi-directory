package shared

type DownloadAccessRestriction struct {
	DeviceAllowed      *bool   `json:"deviceAllowed"`
	DownloadsAcquired  *int32  `json:"downloadsAcquired"`
	JustAcquired       *bool   `json:"justAcquired"`
	Kind               *string `json:"kind"`
	MaxDownloadDevices *int32  `json:"maxDownloadDevices"`
	Message            *string `json:"message"`
	Nonce              *string `json:"nonce"`
	ReasonCode         *string `json:"reasonCode"`
	Restricted         *bool   `json:"restricted"`
	Signature          *string `json:"signature"`
	Source             *string `json:"source"`
	VolumeID           *string `json:"volumeId"`
}
