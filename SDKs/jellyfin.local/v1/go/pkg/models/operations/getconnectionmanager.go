package operations

type GetConnectionManagerPathParams struct {
	ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
}

type GetConnectionManagerRequest struct {
	PathParams GetConnectionManagerPathParams
}

type GetConnectionManagerResponse struct {
	ContentType                                string
	GetConnectionManager200TextXMLBinaryString []byte
	StatusCode                                 int64
}
