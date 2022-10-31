package operations

type PostToolsBulkAnonymizeRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostToolsBulkAnonymizeResponse struct {
	ContentType                                 string
	PostToolsBulkAnonymize200ApplicationJSONAny *interface{}
	StatusCode                                  int64
}
