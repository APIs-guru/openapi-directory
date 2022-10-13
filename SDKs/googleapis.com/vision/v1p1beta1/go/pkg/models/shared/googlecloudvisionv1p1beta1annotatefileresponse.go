package shared

type GoogleCloudVisionV1p1beta1AnnotateFileResponse struct {
	Error       *Status                                           `json:"error"`
	InputConfig *GoogleCloudVisionV1p1beta1InputConfig            `json:"inputConfig"`
	Responses   []GoogleCloudVisionV1p1beta1AnnotateImageResponse `json:"responses"`
	TotalPages  *int32                                            `json:"totalPages"`
}
