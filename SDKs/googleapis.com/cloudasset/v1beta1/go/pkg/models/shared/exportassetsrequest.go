package shared

type ExportAssetsRequestContentTypeEnum string

const (
	ExportAssetsRequestContentTypeEnumContentTypeUnspecified ExportAssetsRequestContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	ExportAssetsRequestContentTypeEnumResource               ExportAssetsRequestContentTypeEnum = "RESOURCE"
	ExportAssetsRequestContentTypeEnumIamPolicy              ExportAssetsRequestContentTypeEnum = "IAM_POLICY"
)

// ExportAssetsRequest
// Export asset request.
type ExportAssetsRequest struct {
	AssetTypes   []string                            `json:"assetTypes,omitempty"`
	ContentType  *ExportAssetsRequestContentTypeEnum `json:"contentType,omitempty"`
	OutputConfig *OutputConfig                       `json:"outputConfig,omitempty"`
	ReadTime     *string                             `json:"readTime,omitempty"`
}
