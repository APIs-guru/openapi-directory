package operations

type PutToolsLogLevelSqliteRequest struct {
	Request []byte `request:"mediaType=text/plain"`
}

type PutToolsLogLevelSqliteResponse struct {
	ContentType string
	StatusCode  int64
}
