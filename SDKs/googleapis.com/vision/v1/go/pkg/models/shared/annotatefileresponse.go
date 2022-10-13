package shared

type AnnotateFileResponse struct {
	Error       *Status                 `json:"error"`
	InputConfig *InputConfig            `json:"inputConfig"`
	Responses   []AnnotateImageResponse `json:"responses"`
	TotalPages  *int32                  `json:"totalPages"`
}
