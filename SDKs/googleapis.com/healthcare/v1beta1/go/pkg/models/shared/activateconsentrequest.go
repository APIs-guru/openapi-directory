package shared

// ActivateConsentRequest
// Activates the latest revision of the specified Consent by committing a new revision with `state` updated to `ACTIVE`. If the latest revision of the given Consent is in the `ACTIVE` state, no new revision is committed. A FAILED_PRECONDITION error occurs if the latest revision of the given consent is in the `REJECTED` or `REVOKED` state.
type ActivateConsentRequest struct {
	ConsentArtifact *string `json:"consentArtifact,omitempty"`
	ExpireTime      *string `json:"expireTime,omitempty"`
	TTL             *string `json:"ttl,omitempty"`
}
