package shared

// ObOtherCodeType18
// Other fee rate type which is not available in the standard code set
type ObOtherCodeType18 struct {
	Code        *string `json:"Code,omitempty"`
	Description string  `json:"Description"`
	Name        string  `json:"Name"`
}
