package shared

type GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum string

const (
	GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnumOff        GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum = "OFF"
	GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnumUnenforced GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum = "UNENFORCED"
	GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnumEnforced   GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum = "ENFORCED"
)

type GoogleFirebaseAppcheckV1betaService struct {
	EnforcementMode *GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum `json:"enforcementMode"`
	Name            *string                                                 `json:"name"`
}
