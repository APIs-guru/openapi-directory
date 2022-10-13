package operations

type GetConnectionManager2PathParams struct {
	ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
}

type GetConnectionManager2Request struct {
	PathParams GetConnectionManager2PathParams
}

type GetConnectionManager2Response struct {
	ContentType                                 string
	GetConnectionManager2200TextXMLBinaryString []byte
	StatusCode                                  int64
}
