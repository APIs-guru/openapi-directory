package shared

// GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo
// Information about the upcoming deprecation of this processor version.
type GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo struct {
	DeprecationTime             *string `json:"deprecationTime,omitempty"`
	ReplacementProcessorVersion *string `json:"replacementProcessorVersion,omitempty"`
}
