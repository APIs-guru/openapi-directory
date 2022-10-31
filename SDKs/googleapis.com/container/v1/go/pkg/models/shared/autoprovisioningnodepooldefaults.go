package shared



type AutoprovisioningNodePoolDefaults struct {
    BootDiskKmsKey *string `json:"bootDiskKmsKey,omitempty"`
    DiskSizeGb *int32 `json:"diskSizeGb,omitempty"`
    DiskType *string `json:"diskType,omitempty"`
    ImageType *string `json:"imageType,omitempty"`
    Management *NodeManagement `json:"management,omitempty"`
    MinCPUPlatform *string `json:"minCpuPlatform,omitempty"`
    OauthScopes []string `json:"oauthScopes,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    ShieldedInstanceConfig *ShieldedInstanceConfig `json:"shieldedInstanceConfig,omitempty"`
    UpgradeSettings *UpgradeSettings `json:"upgradeSettings,omitempty"`
    
}

