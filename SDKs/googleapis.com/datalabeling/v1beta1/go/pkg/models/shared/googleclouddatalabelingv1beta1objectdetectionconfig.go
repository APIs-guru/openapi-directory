package shared

// GoogleCloudDatalabelingV1beta1ObjectDetectionConfig
// Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.
type GoogleCloudDatalabelingV1beta1ObjectDetectionConfig struct {
	AnnotationSpecSet   *string  `json:"annotationSpecSet,omitempty"`
	ExtractionFrameRate *float64 `json:"extractionFrameRate,omitempty"`
}
