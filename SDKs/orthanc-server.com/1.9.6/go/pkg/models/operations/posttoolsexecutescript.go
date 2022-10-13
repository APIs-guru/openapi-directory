package operations

type PostToolsExecuteScriptRequest struct {
	Request []byte `request:"mediaType=text/plain"`
}

type PostToolsExecuteScriptResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
