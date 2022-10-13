package operations

type PostToolsBulkContentRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostToolsBulkContentResponse struct {
	ContentType string
	StatusCode  int64
}
