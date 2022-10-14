package shared

type FeedContentTypeEnum string

const (
	FeedContentTypeEnumContentTypeUnspecified FeedContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	FeedContentTypeEnumResource               FeedContentTypeEnum = "RESOURCE"
	FeedContentTypeEnumIamPolicy              FeedContentTypeEnum = "IAM_POLICY"
	FeedContentTypeEnumOrgPolicy              FeedContentTypeEnum = "ORG_POLICY"
	FeedContentTypeEnumAccessPolicy           FeedContentTypeEnum = "ACCESS_POLICY"
	FeedContentTypeEnumOsInventory            FeedContentTypeEnum = "OS_INVENTORY"
	FeedContentTypeEnumRelationship           FeedContentTypeEnum = "RELATIONSHIP"
)

type Feed struct {
	AssetNames        []string             `json:"assetNames,omitempty"`
	AssetTypes        []string             `json:"assetTypes,omitempty"`
	Condition         *Expr                `json:"condition,omitempty"`
	ContentType       *FeedContentTypeEnum `json:"contentType,omitempty"`
	FeedOutputConfig  *FeedOutputConfig    `json:"feedOutputConfig,omitempty"`
	Name              *string              `json:"name,omitempty"`
	RelationshipTypes []string             `json:"relationshipTypes,omitempty"`
}
