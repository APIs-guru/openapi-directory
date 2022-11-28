package shared

// ObOtherCodeType11
// Other application frequencies that are not available in the standard code list
type ObOtherCodeType11 struct {
	Code        *string `json:"Code,omitempty"`
	Description string  `json:"Description"`
	Name        string  `json:"Name"`
}
