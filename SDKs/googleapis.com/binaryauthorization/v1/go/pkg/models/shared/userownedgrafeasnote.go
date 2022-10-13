package shared

type UserOwnedGrafeasNote struct {
	DelegationServiceAccountEmail *string             `json:"delegationServiceAccountEmail"`
	NoteReference                 *string             `json:"noteReference"`
	PublicKeys                    []AttestorPublicKey `json:"publicKeys"`
}
