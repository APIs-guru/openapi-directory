package shared

type DynamicTargetingKeyObjectTypeEnum string

const (
	DynamicTargetingKeyObjectTypeEnumObjectAdvertiser DynamicTargetingKeyObjectTypeEnum = "OBJECT_ADVERTISER"
	DynamicTargetingKeyObjectTypeEnumObjectAd         DynamicTargetingKeyObjectTypeEnum = "OBJECT_AD"
	DynamicTargetingKeyObjectTypeEnumObjectCreative   DynamicTargetingKeyObjectTypeEnum = "OBJECT_CREATIVE"
	DynamicTargetingKeyObjectTypeEnumObjectPlacement  DynamicTargetingKeyObjectTypeEnum = "OBJECT_PLACEMENT"
)

// DynamicTargetingKey
// Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.
type DynamicTargetingKey struct {
	Kind       *string                            `json:"kind,omitempty"`
	Name       *string                            `json:"name,omitempty"`
	ObjectID   *string                            `json:"objectId,omitempty"`
	ObjectType *DynamicTargetingKeyObjectTypeEnum `json:"objectType,omitempty"`
}
