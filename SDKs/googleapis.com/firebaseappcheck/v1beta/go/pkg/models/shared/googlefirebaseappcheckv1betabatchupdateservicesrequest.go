package shared

// GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest
// Request message for the BatchUpdateServices method.
type GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest struct {
	Requests   []GoogleFirebaseAppcheckV1betaUpdateServiceRequest `json:"requests,omitempty"`
	UpdateMask *string                                            `json:"updateMask,omitempty"`
}
