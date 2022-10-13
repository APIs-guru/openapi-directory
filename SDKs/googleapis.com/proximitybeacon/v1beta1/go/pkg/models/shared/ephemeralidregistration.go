package shared

type EphemeralIDRegistration struct {
	BeaconEcdhPublicKey    *string `json:"beaconEcdhPublicKey"`
	BeaconIdentityKey      *string `json:"beaconIdentityKey"`
	InitialClockValue      *string `json:"initialClockValue"`
	InitialEid             *string `json:"initialEid"`
	RotationPeriodExponent *int64  `json:"rotationPeriodExponent"`
	ServiceEcdhPublicKey   *string `json:"serviceEcdhPublicKey"`
}
