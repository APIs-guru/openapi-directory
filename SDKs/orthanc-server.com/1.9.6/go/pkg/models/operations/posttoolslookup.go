package operations

type PostToolsLookupRequest struct {
	Request []byte `request:"mediaType=text/plain"`
}

type PostToolsLookupResponse struct {
	ContentType                          string
	PostToolsLookup200ApplicationJSONAny *interface{}
	StatusCode                           int64
}
