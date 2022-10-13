package operations

type PostToolsCreateMediaRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostToolsCreateMediaResponse struct {
	Body                                      []byte
	ContentType                               string
	PostToolsCreateMedia200ApplicationJSONAny *interface{}
	StatusCode                                int64
}
