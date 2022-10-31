package shared

type EphemeralIDRegistrationParams struct {
	MaxRotationPeriodExponent *int64  `json:"maxRotationPeriodExponent,omitempty"`
	MinRotationPeriodExponent *int64  `json:"minRotationPeriodExponent,omitempty"`
	ServiceEcdhPublicKey      *string `json:"serviceEcdhPublicKey,omitempty"`
}
