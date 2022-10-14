package shared

type GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest struct {
	Requests   []GoogleFirebaseAppcheckV1betaUpdateServiceRequest `json:"requests,omitempty"`
	UpdateMask *string                                            `json:"updateMask,omitempty"`
}
