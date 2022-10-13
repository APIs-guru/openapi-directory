package shared

type InstanceReference struct {
	InstanceID     *string `json:"instanceId"`
	InstanceName   *string `json:"instanceName"`
	PublicEciesKey *string `json:"publicEciesKey"`
	PublicKey      *string `json:"publicKey"`
}
