package shared

type ContentResult struct {
	Content     *string `json:"content,omitempty"`
	ContentType *string `json:"contentType,omitempty"`
	StatusCode  *int32  `json:"statusCode,omitempty"`
}
