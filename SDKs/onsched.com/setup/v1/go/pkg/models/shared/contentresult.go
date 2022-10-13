package shared

type ContentResult struct {
	Content     *string `json:"content"`
	ContentType *string `json:"contentType"`
	StatusCode  *int32  `json:"statusCode"`
}
