package shared

type GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum string

const (
	GoogleFirebaseAppcheckV1ServiceEnforcementModeEnumOff        GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum = "OFF"
	GoogleFirebaseAppcheckV1ServiceEnforcementModeEnumUnenforced GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum = "UNENFORCED"
	GoogleFirebaseAppcheckV1ServiceEnforcementModeEnumEnforced   GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum = "ENFORCED"
)

type GoogleFirebaseAppcheckV1Service struct {
	EnforcementMode *GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum `json:"enforcementMode"`
	Name            *string                                             `json:"name"`
}
