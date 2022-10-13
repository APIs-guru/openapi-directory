package operations

type ProcessConnectionManagerControlRequestPathParams struct {
	ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
}

type ProcessConnectionManagerControlRequestRequest struct {
	PathParams ProcessConnectionManagerControlRequestPathParams
}

type ProcessConnectionManagerControlRequestResponse struct {
	ContentType                                                  string
	ProcessConnectionManagerControlRequest200TextXMLBinaryString []byte
	StatusCode                                                   int64
}
