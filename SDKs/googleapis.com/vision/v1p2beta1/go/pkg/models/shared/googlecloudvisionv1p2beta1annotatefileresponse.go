package shared

type GoogleCloudVisionV1p2beta1AnnotateFileResponse struct {
	Error       *Status                                           `json:"error"`
	InputConfig *GoogleCloudVisionV1p2beta1InputConfig            `json:"inputConfig"`
	Responses   []GoogleCloudVisionV1p2beta1AnnotateImageResponse `json:"responses"`
	TotalPages  *int32                                            `json:"totalPages"`
}
