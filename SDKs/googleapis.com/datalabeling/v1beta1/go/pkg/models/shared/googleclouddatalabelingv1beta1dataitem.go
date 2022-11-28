package shared

// GoogleCloudDatalabelingV1beta1DataItem
// DataItem is a piece of data, without annotation. For example, an image.
type GoogleCloudDatalabelingV1beta1DataItem struct {
	ImagePayload *GoogleCloudDatalabelingV1beta1ImagePayload `json:"imagePayload,omitempty"`
	Name         *string                                     `json:"name,omitempty"`
	TextPayload  *GoogleCloudDatalabelingV1beta1TextPayload  `json:"textPayload,omitempty"`
	VideoPayload *GoogleCloudDatalabelingV1beta1VideoPayload `json:"videoPayload,omitempty"`
}
