package shared

// ProprietaryBankTransactionCodeStructure1
// Set of elements to fully identify a proprietary bank transaction code.
type ProprietaryBankTransactionCodeStructure1 struct {
	Code   string  `json:"Code"`
	Issuer *string `json:"Issuer,omitempty"`
}
