package operations

type PutToolsAcceptedTransferSyntaxesRequests struct {
	Any       *interface{} `request:"mediaType=application/json"`
	TextPlain []byte       `request:"mediaType=text/plain"`
}

type PutToolsAcceptedTransferSyntaxesRequest struct {
	Request *PutToolsAcceptedTransferSyntaxesRequests
}

type PutToolsAcceptedTransferSyntaxesResponse struct {
	ContentType                                           string
	PutToolsAcceptedTransferSyntaxes200ApplicationJSONAny *interface{}
	StatusCode                                            int64
}
