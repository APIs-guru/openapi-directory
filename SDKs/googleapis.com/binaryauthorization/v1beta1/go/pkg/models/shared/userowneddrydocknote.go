package shared

type UserOwnedDrydockNote struct {
	DelegationServiceAccountEmail *string             `json:"delegationServiceAccountEmail"`
	NoteReference                 *string             `json:"noteReference"`
	PublicKeys                    []AttestorPublicKey `json:"publicKeys"`
}
