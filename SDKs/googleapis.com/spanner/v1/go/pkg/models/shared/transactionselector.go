package shared

type TransactionSelector struct {
	Begin     *TransactionOptions `json:"begin"`
	ID        *string             `json:"id"`
	SingleUse *TransactionOptions `json:"singleUse"`
}
