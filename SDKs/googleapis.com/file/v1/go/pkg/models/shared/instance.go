package shared




type InstanceStateEnum string

const (
    InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
InstanceStateEnumCreating InstanceStateEnum = "CREATING"
InstanceStateEnumReady InstanceStateEnum = "READY"
InstanceStateEnumRepairing InstanceStateEnum = "REPAIRING"
InstanceStateEnumDeleting InstanceStateEnum = "DELETING"
InstanceStateEnumError InstanceStateEnum = "ERROR"
InstanceStateEnumRestoring InstanceStateEnum = "RESTORING"
InstanceStateEnumSuspended InstanceStateEnum = "SUSPENDED"
)



type InstanceSuspensionReasonsEnum string

const (
    InstanceSuspensionReasonsEnumSuspensionReasonUnspecified InstanceSuspensionReasonsEnum = "SUSPENSION_REASON_UNSPECIFIED"
InstanceSuspensionReasonsEnumKmsKeyIssue InstanceSuspensionReasonsEnum = "KMS_KEY_ISSUE"
)



type InstanceTierEnum string

const (
    InstanceTierEnumTierUnspecified InstanceTierEnum = "TIER_UNSPECIFIED"
InstanceTierEnumStandard InstanceTierEnum = "STANDARD"
InstanceTierEnumPremium InstanceTierEnum = "PREMIUM"
InstanceTierEnumBasicHdd InstanceTierEnum = "BASIC_HDD"
InstanceTierEnumBasicSsd InstanceTierEnum = "BASIC_SSD"
InstanceTierEnumHighScaleSsd InstanceTierEnum = "HIGH_SCALE_SSD"
InstanceTierEnumEnterprise InstanceTierEnum = "ENTERPRISE"
)


type Instance struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Etag *string `json:"etag,omitempty"`
    FileShares []FileShareConfig `json:"fileShares,omitempty"`
    KmsKeyName *string `json:"kmsKeyName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Networks []NetworkConfig `json:"networks,omitempty"`
    SatisfiesPzs *bool `json:"satisfiesPzs,omitempty"`
    State *InstanceStateEnum `json:"state,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    SuspensionReasons []InstanceSuspensionReasonsEnum `json:"suspensionReasons,omitempty"`
    Tier *InstanceTierEnum `json:"tier,omitempty"`
    
}

