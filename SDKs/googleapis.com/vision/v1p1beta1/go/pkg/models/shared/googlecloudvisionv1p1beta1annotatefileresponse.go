package shared

type GoogleCloudVisionV1p1beta1AnnotateFileResponse struct {
	Error       *Status                                           `json:"error,omitempty"`
	InputConfig *GoogleCloudVisionV1p1beta1InputConfig            `json:"inputConfig,omitempty"`
	Responses   []GoogleCloudVisionV1p1beta1AnnotateImageResponse `json:"responses,omitempty"`
	TotalPages  *int32                                            `json:"totalPages,omitempty"`
}
