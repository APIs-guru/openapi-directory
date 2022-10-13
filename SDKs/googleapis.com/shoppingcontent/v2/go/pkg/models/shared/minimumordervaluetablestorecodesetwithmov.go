package shared

type MinimumOrderValueTableStoreCodeSetWithMov struct {
	StoreCodes []string `json:"storeCodes"`
	Value      *Price   `json:"value"`
}
