package operations

type GetMediaReceiverRegistrar2PathParams struct {
	ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
}

type GetMediaReceiverRegistrar2Request struct {
	PathParams GetMediaReceiverRegistrar2PathParams
}

type GetMediaReceiverRegistrar2Response struct {
	ContentType                                      string
	GetMediaReceiverRegistrar2200TextXMLBinaryString []byte
	StatusCode                                       int64
}
