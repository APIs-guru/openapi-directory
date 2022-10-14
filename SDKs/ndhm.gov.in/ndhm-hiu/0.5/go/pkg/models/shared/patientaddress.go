package shared

type PatientAddress struct {
	District *string `json:"district,omitempty"`
	Line     *string `json:"line,omitempty"`
	Pincode  *string `json:"pincode,omitempty"`
	State    *string `json:"state,omitempty"`
}
