package shared

type EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum string

const (
	EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnumLogTypeUnspecified EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum = "LOG_TYPE_UNSPECIFIED"
	EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnumGws                EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum = "GWS"
	EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnumGts                EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum = "GTS"
	EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnumAll                EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum = "ALL"
)

type EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum string

const (
	EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnumPrivacyTypeUnspecified EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum = "PRIVACY_TYPE_UNSPECIFIED"
	EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnumNotPii                 EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum = "NOT_PII"
	EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnumPii                    EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum = "PII"
	EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnumSpii                   EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum = "SPII"
	EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnumUnsure                 EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum = "UNSURE"
)

type EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum string

const (
	EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnumSanitizeTypeUnspecified    EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum = "SANITIZE_TYPE_UNSPECIFIED"
	EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnumScrub                      EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum = "SCRUB"
	EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnumAnonymize                  EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum = "ANONYMIZE"
	EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnumAnonymizeLimitedRepeatable EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum = "ANONYMIZE_LIMITED_REPEATABLE"
	EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnumObfuscate                  EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum = "OBFUSCATE"
	EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnumEncrypt                    EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum = "ENCRYPT"
	EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnumDoNotSanitize              EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum = "DO_NOT_SANITIZE"
)

// EnterpriseCrmLoggingGwsSanitizeOptions
// Identifies whether a field contains, or may contain, PII or sensitive data, and how to sanitize the field if it does. If a field's privacy type cannot be determined then it is sanitized (e.g., scrubbed). The specific sanitizer implementation is determined by run-time configuration and environment options (e.g., prod vs. qa). next_id: 5
type EnterpriseCrmLoggingGwsSanitizeOptions struct {
	IsAlreadySanitized *bool                                                   `json:"isAlreadySanitized,omitempty"`
	LogType            []EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum     `json:"logType,omitempty"`
	Privacy            *EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum      `json:"privacy,omitempty"`
	SanitizeType       *EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum `json:"sanitizeType,omitempty"`
}
