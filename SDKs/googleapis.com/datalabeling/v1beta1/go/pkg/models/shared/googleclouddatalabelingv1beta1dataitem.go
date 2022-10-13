package shared

type GoogleCloudDatalabelingV1beta1DataItem struct {
	ImagePayload *GoogleCloudDatalabelingV1beta1ImagePayload `json:"imagePayload"`
	Name         *string                                     `json:"name"`
	TextPayload  *GoogleCloudDatalabelingV1beta1TextPayload  `json:"textPayload"`
	VideoPayload *GoogleCloudDatalabelingV1beta1VideoPayload `json:"videoPayload"`
}
