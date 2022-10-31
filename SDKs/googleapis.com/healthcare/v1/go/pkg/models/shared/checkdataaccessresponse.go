package shared

type CheckDataAccessResponse struct {
	ConsentDetails map[string]ConsentEvaluation `json:"consentDetails,omitempty"`
	Consented      *bool                        `json:"consented,omitempty"`
}
