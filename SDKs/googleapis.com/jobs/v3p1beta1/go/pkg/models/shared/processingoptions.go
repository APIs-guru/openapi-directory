package shared

type ProcessingOptionsHTMLSanitizationEnum string

const (
	ProcessingOptionsHTMLSanitizationEnumHTMLSanitizationUnspecified ProcessingOptionsHTMLSanitizationEnum = "HTML_SANITIZATION_UNSPECIFIED"
	ProcessingOptionsHTMLSanitizationEnumHTMLSanitizationDisabled    ProcessingOptionsHTMLSanitizationEnum = "HTML_SANITIZATION_DISABLED"
	ProcessingOptionsHTMLSanitizationEnumSimpleFormattingOnly        ProcessingOptionsHTMLSanitizationEnum = "SIMPLE_FORMATTING_ONLY"
)

// ProcessingOptions
// Input only. Options for job processing.
type ProcessingOptions struct {
	DisableStreetAddressResolution *bool                                  `json:"disableStreetAddressResolution,omitempty"`
	HTMLSanitization               *ProcessingOptionsHTMLSanitizationEnum `json:"htmlSanitization,omitempty"`
}
