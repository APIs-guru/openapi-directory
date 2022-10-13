package operations

type PostToolsDicomEchoRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostToolsDicomEchoResponse struct {
	ContentType string
	StatusCode  int64
}
