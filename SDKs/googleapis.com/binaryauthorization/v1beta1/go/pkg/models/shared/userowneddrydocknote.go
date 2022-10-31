package shared



type UserOwnedDrydockNote struct {
    DelegationServiceAccountEmail *string `json:"delegationServiceAccountEmail,omitempty"`
    NoteReference *string `json:"noteReference,omitempty"`
    PublicKeys []AttestorPublicKey `json:"publicKeys,omitempty"`
    
}

