package operations

type PutToolsLogLevelJobsRequest struct {
	Request []byte `request:"mediaType=text/plain"`
}

type PutToolsLogLevelJobsResponse struct {
	ContentType string
	StatusCode  int64
}
