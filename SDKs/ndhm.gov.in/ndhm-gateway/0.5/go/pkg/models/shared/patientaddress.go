package shared

type PatientAddress struct {
	District *string `json:"district"`
	Line     *string `json:"line"`
	Pincode  *string `json:"pincode"`
	State    *string `json:"state"`
}
