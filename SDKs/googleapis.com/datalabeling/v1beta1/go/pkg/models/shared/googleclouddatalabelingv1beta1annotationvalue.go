package shared

type GoogleCloudDatalabelingV1beta1AnnotationValue struct {
	ImageBoundingPolyAnnotation    *GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation    `json:"imageBoundingPolyAnnotation"`
	ImageClassificationAnnotation  *GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation  `json:"imageClassificationAnnotation"`
	ImagePolylineAnnotation        *GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation        `json:"imagePolylineAnnotation"`
	ImageSegmentationAnnotation    *GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation    `json:"imageSegmentationAnnotation"`
	TextClassificationAnnotation   *GoogleCloudDatalabelingV1beta1TextClassificationAnnotation   `json:"textClassificationAnnotation"`
	TextEntityExtractionAnnotation *GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation `json:"textEntityExtractionAnnotation"`
	VideoClassificationAnnotation  *GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation  `json:"videoClassificationAnnotation"`
	VideoEventAnnotation           *GoogleCloudDatalabelingV1beta1VideoEventAnnotation           `json:"videoEventAnnotation"`
	VideoObjectTrackingAnnotation  *GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation  `json:"videoObjectTrackingAnnotation"`
}
