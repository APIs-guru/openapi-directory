package shared



type GoogleCloudDatalabelingV1beta1AnnotationValue struct {
    ImageBoundingPolyAnnotation *GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation `json:"imageBoundingPolyAnnotation,omitempty"`
    ImageClassificationAnnotation *GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation `json:"imageClassificationAnnotation,omitempty"`
    ImagePolylineAnnotation *GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation `json:"imagePolylineAnnotation,omitempty"`
    ImageSegmentationAnnotation *GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation `json:"imageSegmentationAnnotation,omitempty"`
    TextClassificationAnnotation *GoogleCloudDatalabelingV1beta1TextClassificationAnnotation `json:"textClassificationAnnotation,omitempty"`
    TextEntityExtractionAnnotation *GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation `json:"textEntityExtractionAnnotation,omitempty"`
    VideoClassificationAnnotation *GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation `json:"videoClassificationAnnotation,omitempty"`
    VideoEventAnnotation *GoogleCloudDatalabelingV1beta1VideoEventAnnotation `json:"videoEventAnnotation,omitempty"`
    VideoObjectTrackingAnnotation *GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation `json:"videoObjectTrackingAnnotation,omitempty"`
    
}

