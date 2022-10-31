package shared

type IosTestSetup struct {
	AdditionalIpas  []FileReference `json:"additionalIpas,omitempty"`
	NetworkProfile  *string         `json:"networkProfile,omitempty"`
	PullDirectories []IosDeviceFile `json:"pullDirectories,omitempty"`
	PushFiles       []IosDeviceFile `json:"pushFiles,omitempty"`
}
