package shared

// UserOwnedGrafeasNote
// An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
type UserOwnedGrafeasNote struct {
	DelegationServiceAccountEmail *string             `json:"delegationServiceAccountEmail,omitempty"`
	NoteReference                 *string             `json:"noteReference,omitempty"`
	PublicKeys                    []AttestorPublicKey `json:"publicKeys,omitempty"`
}

// UserOwnedGrafeasNoteInput
// An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
type UserOwnedGrafeasNoteInput struct {
	NoteReference *string             `json:"noteReference,omitempty"`
	PublicKeys    []AttestorPublicKey `json:"publicKeys,omitempty"`
}
