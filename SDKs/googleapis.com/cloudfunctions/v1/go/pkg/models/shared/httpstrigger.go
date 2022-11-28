package shared

type HTTPSTriggerSecurityLevelEnum string

const (
	HTTPSTriggerSecurityLevelEnumSecurityLevelUnspecified HTTPSTriggerSecurityLevelEnum = "SECURITY_LEVEL_UNSPECIFIED"
	HTTPSTriggerSecurityLevelEnumSecureAlways             HTTPSTriggerSecurityLevelEnum = "SECURE_ALWAYS"
	HTTPSTriggerSecurityLevelEnumSecureOptional           HTTPSTriggerSecurityLevelEnum = "SECURE_OPTIONAL"
)

// HTTPSTriggerInput
// Describes HttpsTrigger, could be used to connect web hooks to function.
type HTTPSTriggerInput struct {
	SecurityLevel *HTTPSTriggerSecurityLevelEnum `json:"securityLevel,omitempty"`
}

// HTTPSTrigger
// Describes HttpsTrigger, could be used to connect web hooks to function.
type HTTPSTrigger struct {
	SecurityLevel *HTTPSTriggerSecurityLevelEnum `json:"securityLevel,omitempty"`
	URL           *string                        `json:"url,omitempty"`
}
