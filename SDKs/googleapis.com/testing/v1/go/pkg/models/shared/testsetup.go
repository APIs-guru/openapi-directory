package shared

// TestSetup
// A description of how to set up the Android device prior to running the test.
type TestSetup struct {
	Account                  *Account              `json:"account,omitempty"`
	AdditionalApks           []Apk                 `json:"additionalApks,omitempty"`
	DirectoriesToPull        []string              `json:"directoriesToPull,omitempty"`
	DontAutograntPermissions *bool                 `json:"dontAutograntPermissions,omitempty"`
	EnvironmentVariables     []EnvironmentVariable `json:"environmentVariables,omitempty"`
	FilesToPush              []DeviceFile          `json:"filesToPush,omitempty"`
	NetworkProfile           *string               `json:"networkProfile,omitempty"`
	Systrace                 *SystraceSetup        `json:"systrace,omitempty"`
}
