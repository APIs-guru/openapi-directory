package shared

type BackupSourceInstanceTierEnum string

const (
	BackupSourceInstanceTierEnumTierUnspecified BackupSourceInstanceTierEnum = "TIER_UNSPECIFIED"
	BackupSourceInstanceTierEnumStandard        BackupSourceInstanceTierEnum = "STANDARD"
	BackupSourceInstanceTierEnumPremium         BackupSourceInstanceTierEnum = "PREMIUM"
	BackupSourceInstanceTierEnumBasicHdd        BackupSourceInstanceTierEnum = "BASIC_HDD"
	BackupSourceInstanceTierEnumBasicSsd        BackupSourceInstanceTierEnum = "BASIC_SSD"
	BackupSourceInstanceTierEnumHighScaleSsd    BackupSourceInstanceTierEnum = "HIGH_SCALE_SSD"
	BackupSourceInstanceTierEnumEnterprise      BackupSourceInstanceTierEnum = "ENTERPRISE"
)

type BackupStateEnum string

const (
	BackupStateEnumStateUnspecified BackupStateEnum = "STATE_UNSPECIFIED"
	BackupStateEnumCreating         BackupStateEnum = "CREATING"
	BackupStateEnumFinalizing       BackupStateEnum = "FINALIZING"
	BackupStateEnumReady            BackupStateEnum = "READY"
	BackupStateEnumDeleting         BackupStateEnum = "DELETING"
)

type Backup struct {
	CapacityGb         *string                       `json:"capacityGb"`
	CreateTime         *string                       `json:"createTime"`
	Description        *string                       `json:"description"`
	DownloadBytes      *string                       `json:"downloadBytes"`
	Labels             map[string]string             `json:"labels"`
	Name               *string                       `json:"name"`
	SatisfiesPzs       *bool                         `json:"satisfiesPzs"`
	SourceFileShare    *string                       `json:"sourceFileShare"`
	SourceInstance     *string                       `json:"sourceInstance"`
	SourceInstanceTier *BackupSourceInstanceTierEnum `json:"sourceInstanceTier"`
	State              *BackupStateEnum              `json:"state"`
	StorageBytes       *string                       `json:"storageBytes"`
}
