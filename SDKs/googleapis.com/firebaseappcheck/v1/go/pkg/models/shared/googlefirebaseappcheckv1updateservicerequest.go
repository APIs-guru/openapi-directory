package shared

// GoogleFirebaseAppcheckV1UpdateServiceRequest
// Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
type GoogleFirebaseAppcheckV1UpdateServiceRequest struct {
	Service    *GoogleFirebaseAppcheckV1Service `json:"service,omitempty"`
	UpdateMask *string                          `json:"updateMask,omitempty"`
}
