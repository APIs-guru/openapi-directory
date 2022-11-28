package shared

// ObOtherCodeType16
// Other application frequencies not covered in the standard code list
type ObOtherCodeType16 struct {
	Code        *string `json:"Code,omitempty"`
	Description string  `json:"Description"`
	Name        string  `json:"Name"`
}
