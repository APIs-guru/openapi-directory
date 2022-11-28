package shared

type ImageConfigTextRedactionModeEnum string

const (
	ImageConfigTextRedactionModeEnumTextRedactionModeUnspecified ImageConfigTextRedactionModeEnum = "TEXT_REDACTION_MODE_UNSPECIFIED"
	ImageConfigTextRedactionModeEnumRedactAllText                ImageConfigTextRedactionModeEnum = "REDACT_ALL_TEXT"
	ImageConfigTextRedactionModeEnumRedactSensitiveText          ImageConfigTextRedactionModeEnum = "REDACT_SENSITIVE_TEXT"
	ImageConfigTextRedactionModeEnumRedactNoText                 ImageConfigTextRedactionModeEnum = "REDACT_NO_TEXT"
)

// ImageConfig
// Specifies how to handle de-identification of image pixels.
type ImageConfig struct {
	TextRedactionMode *ImageConfigTextRedactionModeEnum `json:"textRedactionMode,omitempty"`
}
