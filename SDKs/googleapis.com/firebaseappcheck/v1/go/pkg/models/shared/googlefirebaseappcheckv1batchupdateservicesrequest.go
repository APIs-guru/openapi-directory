package shared

type GoogleFirebaseAppcheckV1BatchUpdateServicesRequest struct {
	Requests   []GoogleFirebaseAppcheckV1UpdateServiceRequest `json:"requests,omitempty"`
	UpdateMask *string                                        `json:"updateMask,omitempty"`
}
