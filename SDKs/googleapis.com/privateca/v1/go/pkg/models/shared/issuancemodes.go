package shared

type IssuanceModes struct {
	AllowConfigBasedIssuance *bool `json:"allowConfigBasedIssuance"`
	AllowCsrBasedIssuance    *bool `json:"allowCsrBasedIssuance"`
}
