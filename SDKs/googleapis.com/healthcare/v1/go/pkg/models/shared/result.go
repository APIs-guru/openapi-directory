package shared

type Result struct {
	ConsentDetails map[string]ConsentEvaluation `json:"consentDetails,omitempty"`
	Consented      *bool                        `json:"consented,omitempty"`
	DataID         *string                      `json:"dataId,omitempty"`
}
