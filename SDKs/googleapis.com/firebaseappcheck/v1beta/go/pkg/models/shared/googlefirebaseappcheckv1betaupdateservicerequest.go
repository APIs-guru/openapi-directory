package shared

// GoogleFirebaseAppcheckV1betaUpdateServiceRequest
// Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
type GoogleFirebaseAppcheckV1betaUpdateServiceRequest struct {
	Service    *GoogleFirebaseAppcheckV1betaService `json:"service,omitempty"`
	UpdateMask *string                              `json:"updateMask,omitempty"`
}
