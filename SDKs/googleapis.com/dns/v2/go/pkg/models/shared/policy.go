package shared

// Policy
// A policy is a collection of DNS rules applied to one or more Virtual Private Cloud resources.
type Policy struct {
	AlternativeNameServerConfig *PolicyAlternativeNameServerConfig `json:"alternativeNameServerConfig,omitempty"`
	Description                 *string                            `json:"description,omitempty"`
	EnableInboundForwarding     *bool                              `json:"enableInboundForwarding,omitempty"`
	EnableLogging               *bool                              `json:"enableLogging,omitempty"`
	ID                          *string                            `json:"id,omitempty"`
	Kind                        *string                            `json:"kind,omitempty"`
	Name                        *string                            `json:"name,omitempty"`
	Networks                    []PolicyNetwork                    `json:"networks,omitempty"`
}
