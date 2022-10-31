package shared

type ImageConfigTextRedactionModeEnum string

const (
	ImageConfigTextRedactionModeEnumTextRedactionModeUnspecified ImageConfigTextRedactionModeEnum = "TEXT_REDACTION_MODE_UNSPECIFIED"
	ImageConfigTextRedactionModeEnumRedactAllText                ImageConfigTextRedactionModeEnum = "REDACT_ALL_TEXT"
	ImageConfigTextRedactionModeEnumRedactSensitiveText          ImageConfigTextRedactionModeEnum = "REDACT_SENSITIVE_TEXT"
	ImageConfigTextRedactionModeEnumRedactNoText                 ImageConfigTextRedactionModeEnum = "REDACT_NO_TEXT"
)

type ImageConfig struct {
	TextRedactionMode *ImageConfigTextRedactionModeEnum `json:"textRedactionMode,omitempty"`
}
