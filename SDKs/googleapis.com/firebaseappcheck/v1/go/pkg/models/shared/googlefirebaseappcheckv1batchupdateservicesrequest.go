package shared

// GoogleFirebaseAppcheckV1BatchUpdateServicesRequest
// Request message for the BatchUpdateServices method.
type GoogleFirebaseAppcheckV1BatchUpdateServicesRequest struct {
	Requests   []GoogleFirebaseAppcheckV1UpdateServiceRequest `json:"requests,omitempty"`
	UpdateMask *string                                        `json:"updateMask,omitempty"`
}
