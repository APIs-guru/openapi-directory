package shared




type DynamicTargetingKeyObjectTypeEnum string

const (
    DynamicTargetingKeyObjectTypeEnumObjectAdvertiser DynamicTargetingKeyObjectTypeEnum = "OBJECT_ADVERTISER"
DynamicTargetingKeyObjectTypeEnumObjectAd DynamicTargetingKeyObjectTypeEnum = "OBJECT_AD"
DynamicTargetingKeyObjectTypeEnumObjectCreative DynamicTargetingKeyObjectTypeEnum = "OBJECT_CREATIVE"
DynamicTargetingKeyObjectTypeEnumObjectPlacement DynamicTargetingKeyObjectTypeEnum = "OBJECT_PLACEMENT"
)


type DynamicTargetingKey struct {
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    ObjectType *DynamicTargetingKeyObjectTypeEnum `json:"objectType,omitempty"`
    
}

