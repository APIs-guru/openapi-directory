package shared

type ExecutePatchJobRequest struct {
	Description    *string              `json:"description"`
	DisplayName    *string              `json:"displayName"`
	DryRun         *bool                `json:"dryRun"`
	Duration       *string              `json:"duration"`
	InstanceFilter *PatchInstanceFilter `json:"instanceFilter"`
	PatchConfig    *PatchConfig         `json:"patchConfig"`
	Rollout        *PatchRollout        `json:"rollout"`
}
