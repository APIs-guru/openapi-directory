package shared

type GoogleFirebaseAppcheckV1BatchUpdateServicesRequest struct {
	Requests   []GoogleFirebaseAppcheckV1UpdateServiceRequest `json:"requests"`
	UpdateMask *string                                        `json:"updateMask"`
}
