package shared

type ReadWrite struct {
	PreviousTransaction *string `json:"previousTransaction,omitempty"`
}
