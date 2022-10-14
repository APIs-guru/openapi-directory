package shared

type GoogleCloudVisionV1p2beta1AnnotateFileResponse struct {
	Error       *Status                                           `json:"error,omitempty"`
	InputConfig *GoogleCloudVisionV1p2beta1InputConfig            `json:"inputConfig,omitempty"`
	Responses   []GoogleCloudVisionV1p2beta1AnnotateImageResponse `json:"responses,omitempty"`
	TotalPages  *int32                                            `json:"totalPages,omitempty"`
}
