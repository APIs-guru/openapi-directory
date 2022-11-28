package shared

// MinimumOrderValueTableStoreCodeSetWithMov
// A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.
type MinimumOrderValueTableStoreCodeSetWithMov struct {
	StoreCodes []string `json:"storeCodes,omitempty"`
	Value      *Price   `json:"value,omitempty"`
}
