package shared

// AndroidDeviceCatalog
// The currently supported Android devices.
type AndroidDeviceCatalog struct {
	Models               []AndroidModel               `json:"models,omitempty"`
	RuntimeConfiguration *AndroidRuntimeConfiguration `json:"runtimeConfiguration,omitempty"`
	Versions             []AndroidVersion             `json:"versions,omitempty"`
}
