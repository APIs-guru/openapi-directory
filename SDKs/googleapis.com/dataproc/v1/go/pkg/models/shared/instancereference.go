package shared

// InstanceReference
// A reference to a Compute Engine instance.
type InstanceReference struct {
	InstanceID     *string `json:"instanceId,omitempty"`
	InstanceName   *string `json:"instanceName,omitempty"`
	PublicEciesKey *string `json:"publicEciesKey,omitempty"`
	PublicKey      *string `json:"publicKey,omitempty"`
}
