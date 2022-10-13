package shared

type GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest struct {
	Requests   []GoogleFirebaseAppcheckV1betaUpdateServiceRequest `json:"requests"`
	UpdateMask *string                                            `json:"updateMask"`
}
