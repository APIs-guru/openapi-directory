package shared

type ExportAssetsRequestContentTypeEnum string

const (
	ExportAssetsRequestContentTypeEnumContentTypeUnspecified ExportAssetsRequestContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	ExportAssetsRequestContentTypeEnumResource               ExportAssetsRequestContentTypeEnum = "RESOURCE"
	ExportAssetsRequestContentTypeEnumIamPolicy              ExportAssetsRequestContentTypeEnum = "IAM_POLICY"
	ExportAssetsRequestContentTypeEnumOrgPolicy              ExportAssetsRequestContentTypeEnum = "ORG_POLICY"
	ExportAssetsRequestContentTypeEnumAccessPolicy           ExportAssetsRequestContentTypeEnum = "ACCESS_POLICY"
	ExportAssetsRequestContentTypeEnumOsInventory            ExportAssetsRequestContentTypeEnum = "OS_INVENTORY"
	ExportAssetsRequestContentTypeEnumRelationship           ExportAssetsRequestContentTypeEnum = "RELATIONSHIP"
)

type ExportAssetsRequest struct {
	AssetTypes        []string                            `json:"assetTypes"`
	ContentType       *ExportAssetsRequestContentTypeEnum `json:"contentType"`
	OutputConfig      *OutputConfig                       `json:"outputConfig"`
	ReadTime          *string                             `json:"readTime"`
	RelationshipTypes []string                            `json:"relationshipTypes"`
}
