package shared

type CheckDataAccessResponse struct {
	ConsentDetails map[string]ConsentEvaluation `json:"consentDetails"`
	Consented      *bool                        `json:"consented"`
}
