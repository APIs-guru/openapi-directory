package shared



type EphemeralIDRegistration struct {
    BeaconEcdhPublicKey *string `json:"beaconEcdhPublicKey,omitempty"`
    BeaconIdentityKey *string `json:"beaconIdentityKey,omitempty"`
    InitialClockValue *string `json:"initialClockValue,omitempty"`
    InitialEid *string `json:"initialEid,omitempty"`
    RotationPeriodExponent *int64 `json:"rotationPeriodExponent,omitempty"`
    ServiceEcdhPublicKey *string `json:"serviceEcdhPublicKey,omitempty"`
    
}

