package operations

type PostToolsCreateMediaExtendedRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type PostToolsCreateMediaExtendedResponse struct {
	Body                                              []byte
	ContentType                                       string
	PostToolsCreateMediaExtended200ApplicationJSONAny *interface{}
	StatusCode                                        int64
}
