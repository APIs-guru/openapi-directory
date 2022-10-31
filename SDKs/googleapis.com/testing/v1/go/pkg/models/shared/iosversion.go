package shared



type IosVersion struct {
    ID *string `json:"id,omitempty"`
    MajorVersion *int32 `json:"majorVersion,omitempty"`
    MinorVersion *int32 `json:"minorVersion,omitempty"`
    SupportedXcodeVersionIds []string `json:"supportedXcodeVersionIds,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

