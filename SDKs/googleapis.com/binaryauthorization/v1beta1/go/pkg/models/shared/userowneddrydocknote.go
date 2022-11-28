package shared

// UserOwnedDrydockNoteInput
// An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
type UserOwnedDrydockNoteInput struct {
	NoteReference *string             `json:"noteReference,omitempty"`
	PublicKeys    []AttestorPublicKey `json:"publicKeys,omitempty"`
}

// UserOwnedDrydockNote
// An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
type UserOwnedDrydockNote struct {
	DelegationServiceAccountEmail *string             `json:"delegationServiceAccountEmail,omitempty"`
	NoteReference                 *string             `json:"noteReference,omitempty"`
	PublicKeys                    []AttestorPublicKey `json:"publicKeys,omitempty"`
}
