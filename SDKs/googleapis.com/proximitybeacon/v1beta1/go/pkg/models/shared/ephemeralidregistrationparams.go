package shared

type EphemeralIDRegistrationParams struct {
	MaxRotationPeriodExponent *int64  `json:"maxRotationPeriodExponent"`
	MinRotationPeriodExponent *int64  `json:"minRotationPeriodExponent"`
	ServiceEcdhPublicKey      *string `json:"serviceEcdhPublicKey"`
}
