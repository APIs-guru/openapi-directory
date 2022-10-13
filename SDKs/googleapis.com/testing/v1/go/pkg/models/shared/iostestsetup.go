package shared

type IosTestSetup struct {
	AdditionalIpas  []FileReference `json:"additionalIpas"`
	NetworkProfile  *string         `json:"networkProfile"`
	PullDirectories []IosDeviceFile `json:"pullDirectories"`
	PushFiles       []IosDeviceFile `json:"pushFiles"`
}
