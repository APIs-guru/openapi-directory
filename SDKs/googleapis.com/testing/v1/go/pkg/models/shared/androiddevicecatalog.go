package shared

type AndroidDeviceCatalog struct {
	Models               []AndroidModel               `json:"models"`
	RuntimeConfiguration *AndroidRuntimeConfiguration `json:"runtimeConfiguration"`
	Versions             []AndroidVersion             `json:"versions"`
}
