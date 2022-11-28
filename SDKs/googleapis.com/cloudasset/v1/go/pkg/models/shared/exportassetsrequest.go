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

// ExportAssetsRequest
// Export asset request.
type ExportAssetsRequest struct {
	AssetTypes        []string                            `json:"assetTypes,omitempty"`
	ContentType       *ExportAssetsRequestContentTypeEnum `json:"contentType,omitempty"`
	OutputConfig      *OutputConfig                       `json:"outputConfig,omitempty"`
	ReadTime          *string                             `json:"readTime,omitempty"`
	RelationshipTypes []string                            `json:"relationshipTypes,omitempty"`
}
