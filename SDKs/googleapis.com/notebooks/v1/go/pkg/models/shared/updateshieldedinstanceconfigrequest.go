package shared

// UpdateShieldedInstanceConfigRequest
// Request for updating the Shielded Instance config for a notebook instance. You can only use this method on a stopped instance
type UpdateShieldedInstanceConfigRequest struct {
	ShieldedInstanceConfig *ShieldedInstanceConfig `json:"shieldedInstanceConfig,omitempty"`
}
