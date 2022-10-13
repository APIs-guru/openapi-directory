package shared

type GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum string

const (
	GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnumFeatureUnspecified   GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum = "FEATURE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnumTextClassification   GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum = "TEXT_CLASSIFICATION"
	GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnumTextEntityExtraction GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum = "TEXT_ENTITY_EXTRACTION"
)

type GoogleCloudDatalabelingV1beta1LabelTextRequest struct {
	BasicConfig                *GoogleCloudDatalabelingV1beta1HumanAnnotationConfig       `json:"basicConfig"`
	Feature                    *GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum `json:"feature"`
	TextClassificationConfig   *GoogleCloudDatalabelingV1beta1TextClassificationConfig    `json:"textClassificationConfig"`
	TextEntityExtractionConfig *GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig  `json:"textEntityExtractionConfig"`
}
