package shared

// IssuanceModes
// IssuanceModes specifies the allowed ways in which Certificates may be requested from this CaPool.
type IssuanceModes struct {
	AllowConfigBasedIssuance *bool `json:"allowConfigBasedIssuance,omitempty"`
	AllowCsrBasedIssuance    *bool `json:"allowCsrBasedIssuance,omitempty"`
}
