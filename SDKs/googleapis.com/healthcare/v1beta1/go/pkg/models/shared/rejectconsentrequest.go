package shared

// RejectConsentRequest
// Rejects the latest revision of the specified Consent by committing a new revision with `state` updated to `REJECTED`. If the latest revision of the given Consent is in the `REJECTED` state, no new revision is committed.
type RejectConsentRequest struct {
	ConsentArtifact *string `json:"consentArtifact,omitempty"`
}
