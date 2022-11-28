package shared

// ObOtherCodeType12
// Other calculation frequency which is not available in the standard code set.
type ObOtherCodeType12 struct {
	Code        *string `json:"Code,omitempty"`
	Description string  `json:"Description"`
	Name        string  `json:"Name"`
}
