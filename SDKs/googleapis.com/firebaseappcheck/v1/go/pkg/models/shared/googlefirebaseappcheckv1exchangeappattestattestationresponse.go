package shared

type GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse struct {
	AppCheckToken *GoogleFirebaseAppcheckV1AppCheckToken `json:"appCheckToken,omitempty"`
	Artifact      *string                                `json:"artifact,omitempty"`
}
