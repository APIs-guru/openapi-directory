package shared



type AndroidDeviceCatalog struct {
    Models []AndroidModel `json:"models,omitempty"`
    RuntimeConfiguration *AndroidRuntimeConfiguration `json:"runtimeConfiguration,omitempty"`
    Versions []AndroidVersion `json:"versions,omitempty"`
    
}

