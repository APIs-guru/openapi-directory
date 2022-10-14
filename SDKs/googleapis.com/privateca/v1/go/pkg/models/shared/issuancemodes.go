package shared

type IssuanceModes struct {
	AllowConfigBasedIssuance *bool `json:"allowConfigBasedIssuance,omitempty"`
	AllowCsrBasedIssuance    *bool `json:"allowCsrBasedIssuance,omitempty"`
}
