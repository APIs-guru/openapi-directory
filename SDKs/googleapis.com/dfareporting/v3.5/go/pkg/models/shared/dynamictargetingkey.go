package shared

type DynamicTargetingKeyObjectTypeEnum string

const (
	DynamicTargetingKeyObjectTypeEnumObjectAdvertiser DynamicTargetingKeyObjectTypeEnum = "OBJECT_ADVERTISER"
	DynamicTargetingKeyObjectTypeEnumObjectAd         DynamicTargetingKeyObjectTypeEnum = "OBJECT_AD"
	DynamicTargetingKeyObjectTypeEnumObjectCreative   DynamicTargetingKeyObjectTypeEnum = "OBJECT_CREATIVE"
	DynamicTargetingKeyObjectTypeEnumObjectPlacement  DynamicTargetingKeyObjectTypeEnum = "OBJECT_PLACEMENT"
)

type DynamicTargetingKey struct {
	Kind       *string                            `json:"kind"`
	Name       *string                            `json:"name"`
	ObjectID   *string                            `json:"objectId"`
	ObjectType *DynamicTargetingKeyObjectTypeEnum `json:"objectType"`
}
