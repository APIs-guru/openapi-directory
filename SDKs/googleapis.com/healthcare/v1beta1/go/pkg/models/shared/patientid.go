package shared

// PatientID
// A patient identifier and associated type.
type PatientID struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
