package shared

type GoogleFirebaseAppcheckV1UpdateServiceRequest struct {
	Service    *GoogleFirebaseAppcheckV1Service `json:"service,omitempty"`
	UpdateMask *string                          `json:"updateMask,omitempty"`
}
