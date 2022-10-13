package shared

type GoogleFirebaseAppcheckV1UpdateServiceRequest struct {
	Service    *GoogleFirebaseAppcheckV1Service `json:"service"`
	UpdateMask *string                          `json:"updateMask"`
}
