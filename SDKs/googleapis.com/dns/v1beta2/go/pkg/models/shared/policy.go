package shared

type Policy struct {
	AlternativeNameServerConfig *PolicyAlternativeNameServerConfig `json:"alternativeNameServerConfig"`
	Description                 *string                            `json:"description"`
	EnableInboundForwarding     *bool                              `json:"enableInboundForwarding"`
	EnableLogging               *bool                              `json:"enableLogging"`
	ID                          *string                            `json:"id"`
	Kind                        *string                            `json:"kind"`
	Name                        *string                            `json:"name"`
	Networks                    []PolicyNetwork                    `json:"networks"`
}
