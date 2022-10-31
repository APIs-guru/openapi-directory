package shared

type ActivateConsentRequest struct {
	ConsentArtifact *string `json:"consentArtifact,omitempty"`
	ExpireTime      *string `json:"expireTime,omitempty"`
	TTL             *string `json:"ttl,omitempty"`
}
