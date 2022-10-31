package shared

type QuotaBucket struct {
	AdminOverride    *QuotaOverride    `json:"adminOverride,omitempty"`
	ConsumerOverride *QuotaOverride    `json:"consumerOverride,omitempty"`
	DefaultLimit     *string           `json:"defaultLimit,omitempty"`
	Dimensions       map[string]string `json:"dimensions,omitempty"`
	EffectiveLimit   *string           `json:"effectiveLimit,omitempty"`
	ProducerOverride *QuotaOverride    `json:"producerOverride,omitempty"`
}
