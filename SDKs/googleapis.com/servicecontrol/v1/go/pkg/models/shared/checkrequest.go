package shared

type CheckRequest struct {
	Operation              *Operation `json:"operation"`
	RequestProjectSettings *bool      `json:"requestProjectSettings"`
	ServiceConfigID        *string    `json:"serviceConfigId"`
	SkipActivationCheck    *bool      `json:"skipActivationCheck"`
}
