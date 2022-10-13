package shared

type Result struct {
	ConsentDetails map[string]ConsentEvaluation `json:"consentDetails"`
	Consented      *bool                        `json:"consented"`
	DataID         *string                      `json:"dataId"`
}
