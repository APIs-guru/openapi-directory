package shared

// ObOtherCodeType14
// Other fee rate type code which is not available in the standard code set
type ObOtherCodeType14 struct {
	Code        *string `json:"Code,omitempty"`
	Description string  `json:"Description"`
	Name        string  `json:"Name"`
}
