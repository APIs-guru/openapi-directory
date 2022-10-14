package shared

type HTTPSTriggerSecurityLevelEnum string

const (
	HTTPSTriggerSecurityLevelEnumSecurityLevelUnspecified HTTPSTriggerSecurityLevelEnum = "SECURITY_LEVEL_UNSPECIFIED"
	HTTPSTriggerSecurityLevelEnumSecureAlways             HTTPSTriggerSecurityLevelEnum = "SECURE_ALWAYS"
	HTTPSTriggerSecurityLevelEnumSecureOptional           HTTPSTriggerSecurityLevelEnum = "SECURE_OPTIONAL"
)

type HTTPSTrigger struct {
	SecurityLevel *HTTPSTriggerSecurityLevelEnum `json:"securityLevel,omitempty"`
	URL           *string                        `json:"url,omitempty"`
}
