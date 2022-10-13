package shared

type ExportAssetsRequestContentTypeEnum string

const (
	ExportAssetsRequestContentTypeEnumContentTypeUnspecified ExportAssetsRequestContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
	ExportAssetsRequestContentTypeEnumResource               ExportAssetsRequestContentTypeEnum = "RESOURCE"
	ExportAssetsRequestContentTypeEnumIamPolicy              ExportAssetsRequestContentTypeEnum = "IAM_POLICY"
)

type ExportAssetsRequest struct {
	AssetTypes   []string                            `json:"assetTypes"`
	ContentType  *ExportAssetsRequestContentTypeEnum `json:"contentType"`
	OutputConfig *OutputConfig                       `json:"outputConfig"`
	ReadTime     *string                             `json:"readTime"`
}
