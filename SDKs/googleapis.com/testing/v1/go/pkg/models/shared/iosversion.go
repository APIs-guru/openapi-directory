package shared

type IosVersion struct {
	ID                       *string  `json:"id"`
	MajorVersion             *int32   `json:"majorVersion"`
	MinorVersion             *int32   `json:"minorVersion"`
	SupportedXcodeVersionIds []string `json:"supportedXcodeVersionIds"`
	Tags                     []string `json:"tags"`
}
