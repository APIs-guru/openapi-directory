package operations

type GetContentDirectoryPathParams struct {
	ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
}

type GetContentDirectoryRequest struct {
	PathParams GetContentDirectoryPathParams
}

type GetContentDirectoryResponse struct {
	ContentType                               string
	GetContentDirectory200TextXMLBinaryString []byte
	StatusCode                                int64
}
