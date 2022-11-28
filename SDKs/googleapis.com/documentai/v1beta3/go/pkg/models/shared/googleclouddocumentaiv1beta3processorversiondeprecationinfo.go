package shared

// GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo
// Information about the upcoming deprecation of this processor version.
type GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo struct {
	DeprecationTime             *string `json:"deprecationTime,omitempty"`
	ReplacementProcessorVersion *string `json:"replacementProcessorVersion,omitempty"`
}
