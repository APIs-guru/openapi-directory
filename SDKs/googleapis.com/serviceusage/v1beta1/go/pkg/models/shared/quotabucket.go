package shared

// QuotaBucket
// A quota bucket is a quota provisioning unit for a specific set of dimensions.
type QuotaBucket struct {
	AdminOverride    *QuotaOverride    `json:"adminOverride,omitempty"`
	ConsumerOverride *QuotaOverride    `json:"consumerOverride,omitempty"`
	DefaultLimit     *string           `json:"defaultLimit,omitempty"`
	Dimensions       map[string]string `json:"dimensions,omitempty"`
	EffectiveLimit   *string           `json:"effectiveLimit,omitempty"`
	ProducerOverride *QuotaOverride    `json:"producerOverride,omitempty"`
}
