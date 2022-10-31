package shared

type FeatureTypeEnum string

const (
	FeatureTypeEnumTypeUnspecified       FeatureTypeEnum = "TYPE_UNSPECIFIED"
	FeatureTypeEnumFaceDetection         FeatureTypeEnum = "FACE_DETECTION"
	FeatureTypeEnumLandmarkDetection     FeatureTypeEnum = "LANDMARK_DETECTION"
	FeatureTypeEnumLogoDetection         FeatureTypeEnum = "LOGO_DETECTION"
	FeatureTypeEnumLabelDetection        FeatureTypeEnum = "LABEL_DETECTION"
	FeatureTypeEnumTextDetection         FeatureTypeEnum = "TEXT_DETECTION"
	FeatureTypeEnumDocumentTextDetection FeatureTypeEnum = "DOCUMENT_TEXT_DETECTION"
	FeatureTypeEnumSafeSearchDetection   FeatureTypeEnum = "SAFE_SEARCH_DETECTION"
	FeatureTypeEnumImageProperties       FeatureTypeEnum = "IMAGE_PROPERTIES"
	FeatureTypeEnumCropHints             FeatureTypeEnum = "CROP_HINTS"
	FeatureTypeEnumWebDetection          FeatureTypeEnum = "WEB_DETECTION"
	FeatureTypeEnumProductSearch         FeatureTypeEnum = "PRODUCT_SEARCH"
	FeatureTypeEnumObjectLocalization    FeatureTypeEnum = "OBJECT_LOCALIZATION"
)

type Feature struct {
	MaxResults *int32           `json:"maxResults,omitempty"`
	Model      *string          `json:"model,omitempty"`
	Type       *FeatureTypeEnum `json:"type,omitempty"`
}
