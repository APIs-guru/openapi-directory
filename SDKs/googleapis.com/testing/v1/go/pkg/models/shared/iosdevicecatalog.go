package shared



type IosDeviceCatalog struct {
    Models []IosModel `json:"models,omitempty"`
    RuntimeConfiguration *IosRuntimeConfiguration `json:"runtimeConfiguration,omitempty"`
    Versions []IosVersion `json:"versions,omitempty"`
    XcodeVersions []XcodeVersion `json:"xcodeVersions,omitempty"`
    
}

