package shared

// ObBankTransactionCodeStructure1
// Set of elements used to fully identify the type of underlying transaction resulting in an entry.
type ObBankTransactionCodeStructure1 struct {
	Code    string `json:"Code"`
	SubCode string `json:"SubCode"`
}
