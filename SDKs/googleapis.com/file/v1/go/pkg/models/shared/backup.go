package shared




type BackupSourceInstanceTierEnum string

const (
    BackupSourceInstanceTierEnumTierUnspecified BackupSourceInstanceTierEnum = "TIER_UNSPECIFIED"
BackupSourceInstanceTierEnumStandard BackupSourceInstanceTierEnum = "STANDARD"
BackupSourceInstanceTierEnumPremium BackupSourceInstanceTierEnum = "PREMIUM"
BackupSourceInstanceTierEnumBasicHdd BackupSourceInstanceTierEnum = "BASIC_HDD"
BackupSourceInstanceTierEnumBasicSsd BackupSourceInstanceTierEnum = "BASIC_SSD"
BackupSourceInstanceTierEnumHighScaleSsd BackupSourceInstanceTierEnum = "HIGH_SCALE_SSD"
BackupSourceInstanceTierEnumEnterprise BackupSourceInstanceTierEnum = "ENTERPRISE"
)



type BackupStateEnum string

const (
    BackupStateEnumStateUnspecified BackupStateEnum = "STATE_UNSPECIFIED"
BackupStateEnumCreating BackupStateEnum = "CREATING"
BackupStateEnumFinalizing BackupStateEnum = "FINALIZING"
BackupStateEnumReady BackupStateEnum = "READY"
BackupStateEnumDeleting BackupStateEnum = "DELETING"
)


type Backup struct {
    CapacityGb *string `json:"capacityGb,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DownloadBytes *string `json:"downloadBytes,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    SatisfiesPzs *bool `json:"satisfiesPzs,omitempty"`
    SourceFileShare *string `json:"sourceFileShare,omitempty"`
    SourceInstance *string `json:"sourceInstance,omitempty"`
    SourceInstanceTier *BackupSourceInstanceTierEnum `json:"sourceInstanceTier,omitempty"`
    State *BackupStateEnum `json:"state,omitempty"`
    StorageBytes *string `json:"storageBytes,omitempty"`
    
}

