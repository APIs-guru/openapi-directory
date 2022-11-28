package shared

// GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse
// Response message for the ExchangeAppAttestAttestation method.
type GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse struct {
	AppCheckToken *GoogleFirebaseAppcheckV1AppCheckToken `json:"appCheckToken,omitempty"`
	Artifact      *string                                `json:"artifact,omitempty"`
}
