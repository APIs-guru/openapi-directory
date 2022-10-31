package shared



type TransactionSelector struct {
    Begin *TransactionOptions `json:"begin,omitempty"`
    ID *string `json:"id,omitempty"`
    SingleUse *TransactionOptions `json:"singleUse,omitempty"`
    
}

