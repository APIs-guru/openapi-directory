package shared

type GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum string

const (
	GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnumFeatureUnspecified GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum = "FEATURE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnumClassification     GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum = "CLASSIFICATION"
	GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnumObjectDetection    GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum = "OBJECT_DETECTION"
	GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnumObjectTracking     GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum = "OBJECT_TRACKING"
	GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnumEvent              GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum = "EVENT"
)

type GoogleCloudDatalabelingV1beta1LabelVideoRequest struct {
	BasicConfig               *GoogleCloudDatalabelingV1beta1HumanAnnotationConfig        `json:"basicConfig"`
	EventConfig               *GoogleCloudDatalabelingV1beta1EventConfig                  `json:"eventConfig"`
	Feature                   *GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum `json:"feature"`
	ObjectDetectionConfig     *GoogleCloudDatalabelingV1beta1ObjectDetectionConfig        `json:"objectDetectionConfig"`
	ObjectTrackingConfig      *GoogleCloudDatalabelingV1beta1ObjectTrackingConfig         `json:"objectTrackingConfig"`
	VideoClassificationConfig *GoogleCloudDatalabelingV1beta1VideoClassificationConfig    `json:"videoClassificationConfig"`
}
