package shared



type GoogleCloudDatalabelingV1beta1Example struct {
    Annotations []GoogleCloudDatalabelingV1beta1Annotation `json:"annotations,omitempty"`
    ImagePayload *GoogleCloudDatalabelingV1beta1ImagePayload `json:"imagePayload,omitempty"`
    Name *string `json:"name,omitempty"`
    TextPayload *GoogleCloudDatalabelingV1beta1TextPayload `json:"textPayload,omitempty"`
    VideoPayload *GoogleCloudDatalabelingV1beta1VideoPayload `json:"videoPayload,omitempty"`
    
}

