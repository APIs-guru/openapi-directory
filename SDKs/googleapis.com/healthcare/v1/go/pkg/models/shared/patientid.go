package shared

type PatientID struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
