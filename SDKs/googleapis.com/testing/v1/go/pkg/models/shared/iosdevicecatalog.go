package shared

type IosDeviceCatalog struct {
	Models               []IosModel               `json:"models"`
	RuntimeConfiguration *IosRuntimeConfiguration `json:"runtimeConfiguration"`
	Versions             []IosVersion             `json:"versions"`
	XcodeVersions        []XcodeVersion           `json:"xcodeVersions"`
}
