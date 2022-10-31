package operations

type PostToolsBulkDeleteRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostToolsBulkDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
