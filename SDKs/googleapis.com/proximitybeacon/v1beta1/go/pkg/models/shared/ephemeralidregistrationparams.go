package shared

// EphemeralIDRegistrationParams
// Information a client needs to provision and register beacons that broadcast Eddystone-EID format beacon IDs, using Elliptic curve Diffie-Hellman key exchange. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.
type EphemeralIDRegistrationParams struct {
	MaxRotationPeriodExponent *int64  `json:"maxRotationPeriodExponent,omitempty"`
	MinRotationPeriodExponent *int64  `json:"minRotationPeriodExponent,omitempty"`
	ServiceEcdhPublicKey      *string `json:"serviceEcdhPublicKey,omitempty"`
}
