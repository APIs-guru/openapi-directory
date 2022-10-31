package shared




type FreeInstanceMetadataExpireBehaviorEnum string

const (
    FreeInstanceMetadataExpireBehaviorEnumExpireBehaviorUnspecified FreeInstanceMetadataExpireBehaviorEnum = "EXPIRE_BEHAVIOR_UNSPECIFIED"
FreeInstanceMetadataExpireBehaviorEnumFreeToProvisioned FreeInstanceMetadataExpireBehaviorEnum = "FREE_TO_PROVISIONED"
FreeInstanceMetadataExpireBehaviorEnumRemoveAfterGracePeriod FreeInstanceMetadataExpireBehaviorEnum = "REMOVE_AFTER_GRACE_PERIOD"
)


type FreeInstanceMetadata struct {
    ExpireBehavior *FreeInstanceMetadataExpireBehaviorEnum `json:"expireBehavior,omitempty"`
    ExpireTime *string `json:"expireTime,omitempty"`
    UpgradeTime *string `json:"upgradeTime,omitempty"`
    
}

