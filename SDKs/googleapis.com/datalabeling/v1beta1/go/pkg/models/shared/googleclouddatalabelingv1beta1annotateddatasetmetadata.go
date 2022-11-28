package shared

// GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata
// Metadata on AnnotatedDataset.
type GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata struct {
	BoundingPolyConfig         *GoogleCloudDatalabelingV1beta1BoundingPolyConfig         `json:"boundingPolyConfig,omitempty"`
	EventConfig                *GoogleCloudDatalabelingV1beta1EventConfig                `json:"eventConfig,omitempty"`
	HumanAnnotationConfig      *GoogleCloudDatalabelingV1beta1HumanAnnotationConfig      `json:"humanAnnotationConfig,omitempty"`
	ImageClassificationConfig  *GoogleCloudDatalabelingV1beta1ImageClassificationConfig  `json:"imageClassificationConfig,omitempty"`
	ObjectDetectionConfig      *GoogleCloudDatalabelingV1beta1ObjectDetectionConfig      `json:"objectDetectionConfig,omitempty"`
	ObjectTrackingConfig       *GoogleCloudDatalabelingV1beta1ObjectTrackingConfig       `json:"objectTrackingConfig,omitempty"`
	PolylineConfig             *GoogleCloudDatalabelingV1beta1PolylineConfig             `json:"polylineConfig,omitempty"`
	SegmentationConfig         *GoogleCloudDatalabelingV1beta1SegmentationConfig         `json:"segmentationConfig,omitempty"`
	TextClassificationConfig   *GoogleCloudDatalabelingV1beta1TextClassificationConfig   `json:"textClassificationConfig,omitempty"`
	TextEntityExtractionConfig *GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig `json:"textEntityExtractionConfig,omitempty"`
	VideoClassificationConfig  *GoogleCloudDatalabelingV1beta1VideoClassificationConfig  `json:"videoClassificationConfig,omitempty"`
}
