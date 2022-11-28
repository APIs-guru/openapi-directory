package shared

// AdmissionWhitelistPattern
// An admission allowlist pattern exempts images from checks by admission rules.
type AdmissionWhitelistPattern struct {
	NamePattern *string `json:"namePattern,omitempty"`
}
