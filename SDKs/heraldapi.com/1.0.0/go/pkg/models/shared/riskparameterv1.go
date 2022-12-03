package shared

// RiskParameterV1
// Risk parameters describe the risks associated with the applicant. Institutions use risk parameters to underwrite insurance policies.
type RiskParameterV1 struct {
	ID   string `json:"id"`
	Text string `json:"text"`
}
