package shared

type QuotaBucket struct {
	AdminOverride    *QuotaOverride    `json:"adminOverride"`
	ConsumerOverride *QuotaOverride    `json:"consumerOverride"`
	DefaultLimit     *string           `json:"defaultLimit"`
	Dimensions       map[string]string `json:"dimensions"`
	EffectiveLimit   *string           `json:"effectiveLimit"`
	ProducerOverride *QuotaOverride    `json:"producerOverride"`
}
