package shared

type ActivateConsentRequest struct {
	ConsentArtifact *string `json:"consentArtifact"`
	ExpireTime      *string `json:"expireTime"`
	TTL             *string `json:"ttl"`
}
