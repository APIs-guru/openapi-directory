package shared

// ExecutePatchJobRequest
// A request message to initiate patching across Compute Engine instances.
type ExecutePatchJobRequest struct {
	Description    *string              `json:"description,omitempty"`
	DisplayName    *string              `json:"displayName,omitempty"`
	DryRun         *bool                `json:"dryRun,omitempty"`
	Duration       *string              `json:"duration,omitempty"`
	InstanceFilter *PatchInstanceFilter `json:"instanceFilter,omitempty"`
	PatchConfig    *PatchConfig         `json:"patchConfig,omitempty"`
	Rollout        *PatchRollout        `json:"rollout,omitempty"`
}
