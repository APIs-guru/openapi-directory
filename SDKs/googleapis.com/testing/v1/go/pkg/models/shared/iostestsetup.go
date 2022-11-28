package shared

// IosTestSetup
// A description of how to set up an iOS device prior to running the test.
type IosTestSetup struct {
	AdditionalIpas  []FileReference `json:"additionalIpas,omitempty"`
	NetworkProfile  *string         `json:"networkProfile,omitempty"`
	PullDirectories []IosDeviceFile `json:"pullDirectories,omitempty"`
	PushFiles       []IosDeviceFile `json:"pushFiles,omitempty"`
}
