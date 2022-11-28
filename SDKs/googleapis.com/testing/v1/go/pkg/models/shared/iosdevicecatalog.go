package shared

// IosDeviceCatalog
// The currently supported iOS devices.
type IosDeviceCatalog struct {
	Models               []IosModel               `json:"models,omitempty"`
	RuntimeConfiguration *IosRuntimeConfiguration `json:"runtimeConfiguration,omitempty"`
	Versions             []IosVersion             `json:"versions,omitempty"`
	XcodeVersions        []XcodeVersion           `json:"xcodeVersions,omitempty"`
}
