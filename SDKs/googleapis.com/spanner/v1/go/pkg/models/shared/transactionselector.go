package shared

// TransactionSelector
// This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions.
type TransactionSelector struct {
	Begin     *TransactionOptions `json:"begin,omitempty"`
	ID        *string             `json:"id,omitempty"`
	SingleUse *TransactionOptions `json:"singleUse,omitempty"`
}
