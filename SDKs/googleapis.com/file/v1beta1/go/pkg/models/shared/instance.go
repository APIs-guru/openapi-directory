package shared

type InstanceStateEnum string

const (
	InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
	InstanceStateEnumCreating         InstanceStateEnum = "CREATING"
	InstanceStateEnumReady            InstanceStateEnum = "READY"
	InstanceStateEnumRepairing        InstanceStateEnum = "REPAIRING"
	InstanceStateEnumDeleting         InstanceStateEnum = "DELETING"
	InstanceStateEnumError            InstanceStateEnum = "ERROR"
	InstanceStateEnumRestoring        InstanceStateEnum = "RESTORING"
	InstanceStateEnumSuspended        InstanceStateEnum = "SUSPENDED"
	InstanceStateEnumReverting        InstanceStateEnum = "REVERTING"
)

type InstanceSuspensionReasonsEnum string

const (
	InstanceSuspensionReasonsEnumSuspensionReasonUnspecified InstanceSuspensionReasonsEnum = "SUSPENSION_REASON_UNSPECIFIED"
	InstanceSuspensionReasonsEnumKmsKeyIssue                 InstanceSuspensionReasonsEnum = "KMS_KEY_ISSUE"
)

type InstanceTierEnum string

const (
	InstanceTierEnumTierUnspecified InstanceTierEnum = "TIER_UNSPECIFIED"
	InstanceTierEnumStandard        InstanceTierEnum = "STANDARD"
	InstanceTierEnumPremium         InstanceTierEnum = "PREMIUM"
	InstanceTierEnumBasicHdd        InstanceTierEnum = "BASIC_HDD"
	InstanceTierEnumBasicSsd        InstanceTierEnum = "BASIC_SSD"
	InstanceTierEnumHighScaleSsd    InstanceTierEnum = "HIGH_SCALE_SSD"
	InstanceTierEnumEnterprise      InstanceTierEnum = "ENTERPRISE"
)

type Instance struct {
	CapacityGb         *string                         `json:"capacityGb"`
	CapacityStepSizeGb *string                         `json:"capacityStepSizeGb"`
	CreateTime         *string                         `json:"createTime"`
	Description        *string                         `json:"description"`
	Etag               *string                         `json:"etag"`
	FileShares         []FileShareConfig               `json:"fileShares"`
	KmsKeyName         *string                         `json:"kmsKeyName"`
	Labels             map[string]string               `json:"labels"`
	MaxCapacityGb      *string                         `json:"maxCapacityGb"`
	MaxShareCount      *string                         `json:"maxShareCount"`
	MultiShareEnabled  *bool                           `json:"multiShareEnabled"`
	Name               *string                         `json:"name"`
	Networks           []NetworkConfig                 `json:"networks"`
	SatisfiesPzs       *bool                           `json:"satisfiesPzs"`
	State              *InstanceStateEnum              `json:"state"`
	StatusMessage      *string                         `json:"statusMessage"`
	SuspensionReasons  []InstanceSuspensionReasonsEnum `json:"suspensionReasons"`
	Tier               *InstanceTierEnum               `json:"tier"`
}
