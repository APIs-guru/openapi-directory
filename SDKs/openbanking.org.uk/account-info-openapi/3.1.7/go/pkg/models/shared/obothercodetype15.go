package shared

// ObOtherCodeType15
// Other fee rate type which is not in the standard rate type list
type ObOtherCodeType15 struct {
	Code        *string `json:"Code,omitempty"`
	Description string  `json:"Description"`
	Name        string  `json:"Name"`
}
