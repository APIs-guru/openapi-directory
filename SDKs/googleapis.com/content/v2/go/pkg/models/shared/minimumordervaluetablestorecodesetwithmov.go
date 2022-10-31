package shared

type MinimumOrderValueTableStoreCodeSetWithMov struct {
	StoreCodes []string `json:"storeCodes,omitempty"`
	Value      *Price   `json:"value,omitempty"`
}
