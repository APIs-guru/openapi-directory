package operations

type GetMediaReceiverRegistrar3PathParams struct {
	ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
}

type GetMediaReceiverRegistrar3Request struct {
	PathParams GetMediaReceiverRegistrar3PathParams
}

type GetMediaReceiverRegistrar3Response struct {
	ContentType                                      string
	GetMediaReceiverRegistrar3200TextXMLBinaryString []byte
	StatusCode                                       int64
}
