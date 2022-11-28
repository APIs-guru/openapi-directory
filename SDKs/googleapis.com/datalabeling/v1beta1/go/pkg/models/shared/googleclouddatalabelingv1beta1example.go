package shared

// GoogleCloudDatalabelingV1beta1Example
// An Example is a piece of data and its annotation. For example, an image with label "house".
type GoogleCloudDatalabelingV1beta1Example struct {
	Annotations  []GoogleCloudDatalabelingV1beta1Annotation  `json:"annotations,omitempty"`
	ImagePayload *GoogleCloudDatalabelingV1beta1ImagePayload `json:"imagePayload,omitempty"`
	Name         *string                                     `json:"name,omitempty"`
	TextPayload  *GoogleCloudDatalabelingV1beta1TextPayload  `json:"textPayload,omitempty"`
	VideoPayload *GoogleCloudDatalabelingV1beta1VideoPayload `json:"videoPayload,omitempty"`
}
