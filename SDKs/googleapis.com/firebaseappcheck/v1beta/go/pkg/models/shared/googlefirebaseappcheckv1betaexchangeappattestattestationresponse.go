package shared

type GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse struct {
	AppCheckToken    *GoogleFirebaseAppcheckV1betaAppCheckToken            `json:"appCheckToken"`
	Artifact         *string                                               `json:"artifact"`
	AttestationToken *GoogleFirebaseAppcheckV1betaAttestationTokenResponse `json:"attestationToken"`
}
