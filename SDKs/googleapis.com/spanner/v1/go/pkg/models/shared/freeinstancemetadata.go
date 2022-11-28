package shared

type FreeInstanceMetadataExpireBehaviorEnum string

const (
	FreeInstanceMetadataExpireBehaviorEnumExpireBehaviorUnspecified FreeInstanceMetadataExpireBehaviorEnum = "EXPIRE_BEHAVIOR_UNSPECIFIED"
	FreeInstanceMetadataExpireBehaviorEnumFreeToProvisioned         FreeInstanceMetadataExpireBehaviorEnum = "FREE_TO_PROVISIONED"
	FreeInstanceMetadataExpireBehaviorEnumRemoveAfterGracePeriod    FreeInstanceMetadataExpireBehaviorEnum = "REMOVE_AFTER_GRACE_PERIOD"
)

// FreeInstanceMetadataInput
// Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
type FreeInstanceMetadataInput struct {
	ExpireBehavior *FreeInstanceMetadataExpireBehaviorEnum `json:"expireBehavior,omitempty"`
}

// FreeInstanceMetadata
// Free instance specific metadata that is kept even after an instance has been upgraded for tracking purposes.
type FreeInstanceMetadata struct {
	ExpireBehavior *FreeInstanceMetadataExpireBehaviorEnum `json:"expireBehavior,omitempty"`
	ExpireTime     *string                                 `json:"expireTime,omitempty"`
	UpgradeTime    *string                                 `json:"upgradeTime,omitempty"`
}
