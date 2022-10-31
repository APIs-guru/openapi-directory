package shared




type GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum string

const (
    GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnumContentTypeUnspecified GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum = "CONTENT_TYPE_UNSPECIFIED"
GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnumResource GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum = "RESOURCE"
GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnumIamPolicy GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum = "IAM_POLICY"
GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnumOrgPolicy GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum = "ORG_POLICY"
GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnumAccessPolicy GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum = "ACCESS_POLICY"
GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnumRelationship GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum = "RELATIONSHIP"
)


type GoogleCloudAssetV1p7beta1ExportAssetsRequest struct {
    AssetTypes []string `json:"assetTypes,omitempty"`
    ContentType *GoogleCloudAssetV1p7beta1ExportAssetsRequestContentTypeEnum `json:"contentType,omitempty"`
    OutputConfig *GoogleCloudAssetV1p7beta1OutputConfig `json:"outputConfig,omitempty"`
    ReadTime *string `json:"readTime,omitempty"`
    RelationshipTypes []string `json:"relationshipTypes,omitempty"`
    
}

