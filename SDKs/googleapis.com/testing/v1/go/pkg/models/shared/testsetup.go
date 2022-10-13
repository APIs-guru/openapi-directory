package shared

type TestSetup struct {
	Account                  *Account              `json:"account"`
	AdditionalApks           []Apk                 `json:"additionalApks"`
	DirectoriesToPull        []string              `json:"directoriesToPull"`
	DontAutograntPermissions *bool                 `json:"dontAutograntPermissions"`
	EnvironmentVariables     []EnvironmentVariable `json:"environmentVariables"`
	FilesToPush              []DeviceFile          `json:"filesToPush"`
	NetworkProfile           *string               `json:"networkProfile"`
	Systrace                 *SystraceSetup        `json:"systrace"`
}
