package shared

// EgressControlConfig
// Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource.
type EgressControlConfig struct {
	Backends        *string          `json:"backends,omitempty"`
	ExtractionRules *ExtractionRules `json:"extractionRules,omitempty"`
}
