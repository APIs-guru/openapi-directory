package shared

// RenewalSettings
// JSON template for a subscription renewal settings.
type RenewalSettings struct {
	Kind        *string `json:"kind,omitempty"`
	RenewalType *string `json:"renewalType,omitempty"`
}
