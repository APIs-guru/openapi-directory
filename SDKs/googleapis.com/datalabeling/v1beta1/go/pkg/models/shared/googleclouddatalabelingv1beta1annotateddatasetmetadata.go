package shared

type GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata struct {
	BoundingPolyConfig         *GoogleCloudDatalabelingV1beta1BoundingPolyConfig         `json:"boundingPolyConfig"`
	EventConfig                *GoogleCloudDatalabelingV1beta1EventConfig                `json:"eventConfig"`
	HumanAnnotationConfig      *GoogleCloudDatalabelingV1beta1HumanAnnotationConfig      `json:"humanAnnotationConfig"`
	ImageClassificationConfig  *GoogleCloudDatalabelingV1beta1ImageClassificationConfig  `json:"imageClassificationConfig"`
	ObjectDetectionConfig      *GoogleCloudDatalabelingV1beta1ObjectDetectionConfig      `json:"objectDetectionConfig"`
	ObjectTrackingConfig       *GoogleCloudDatalabelingV1beta1ObjectTrackingConfig       `json:"objectTrackingConfig"`
	PolylineConfig             *GoogleCloudDatalabelingV1beta1PolylineConfig             `json:"polylineConfig"`
	SegmentationConfig         *GoogleCloudDatalabelingV1beta1SegmentationConfig         `json:"segmentationConfig"`
	TextClassificationConfig   *GoogleCloudDatalabelingV1beta1TextClassificationConfig   `json:"textClassificationConfig"`
	TextEntityExtractionConfig *GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig `json:"textEntityExtractionConfig"`
	VideoClassificationConfig  *GoogleCloudDatalabelingV1beta1VideoClassificationConfig  `json:"videoClassificationConfig"`
}
