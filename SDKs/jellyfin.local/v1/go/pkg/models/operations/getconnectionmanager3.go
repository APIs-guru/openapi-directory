package operations

type GetConnectionManager3PathParams struct {
	ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
}

type GetConnectionManager3Request struct {
	PathParams GetConnectionManager3PathParams
}

type GetConnectionManager3Response struct {
	ContentType                                 string
	GetConnectionManager3200TextXMLBinaryString []byte
	StatusCode                                  int64
}
