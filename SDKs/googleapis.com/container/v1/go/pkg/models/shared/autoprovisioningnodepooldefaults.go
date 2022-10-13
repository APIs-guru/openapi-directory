package shared

type AutoprovisioningNodePoolDefaults struct {
	BootDiskKmsKey         *string                 `json:"bootDiskKmsKey"`
	DiskSizeGb             *int32                  `json:"diskSizeGb"`
	DiskType               *string                 `json:"diskType"`
	ImageType              *string                 `json:"imageType"`
	Management             *NodeManagement         `json:"management"`
	MinCPUPlatform         *string                 `json:"minCpuPlatform"`
	OauthScopes            []string                `json:"oauthScopes"`
	ServiceAccount         *string                 `json:"serviceAccount"`
	ShieldedInstanceConfig *ShieldedInstanceConfig `json:"shieldedInstanceConfig"`
	UpgradeSettings        *UpgradeSettings        `json:"upgradeSettings"`
}
