package operations

type ProcessMediaReceiverRegistrarControlRequestPathParams struct {
	ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
}

type ProcessMediaReceiverRegistrarControlRequestRequest struct {
	PathParams ProcessMediaReceiverRegistrarControlRequestPathParams
}

type ProcessMediaReceiverRegistrarControlRequestResponse struct {
	ContentType                                                       string
	ProcessMediaReceiverRegistrarControlRequest200TextXMLBinaryString []byte
	StatusCode                                                        int64
}
