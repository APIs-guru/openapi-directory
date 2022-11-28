package shared

// ObOtherCodeType13
// Other Fee type which is not available in the standard code set
type ObOtherCodeType13 struct {
	Code        *string `json:"Code,omitempty"`
	Description string  `json:"Description"`
	Name        string  `json:"Name"`
}
