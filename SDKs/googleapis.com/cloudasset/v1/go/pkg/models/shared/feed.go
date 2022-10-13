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
	AssetNames        []string             `json:"assetNames"`
	AssetTypes        []string             `json:"assetTypes"`
	Condition         *Expr                `json:"condition"`
	ContentType       *FeedContentTypeEnum `json:"contentType"`
	FeedOutputConfig  *FeedOutputConfig    `json:"feedOutputConfig"`
	Name              *string              `json:"name"`
	RelationshipTypes []string             `json:"relationshipTypes"`
}
