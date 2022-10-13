package operations

type PostToolsBulkModifyRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostToolsBulkModifyResponse struct {
	ContentType                              string
	PostToolsBulkModify200ApplicationJSONAny *interface{}
	StatusCode                               int64
}
